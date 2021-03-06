const axios = require('axios');
var express = require('express');
const { fb_send_message } = require('../lib/fb_api');
var router = express.Router();

const INTENT_IDS = {
  RIGHT_CAR_AND_ZIP: '5e479c71-e8a8-4535-9a83-075145cd205c',
  PAY_NOW_YES: '342248f9-405f-4475-bf86-5f54fedc48d4',
  PAY_NOW: '78536189-38d7-4964-b321-3dccc6026aea',
  JURY_DUTY: '8056dca2-bd9e-4a58-ab47-cbfe6310baa6',
};

function validateLicensePlateNumber(req, res, next) {
  // get the employee ID parameter from the request header received from Dialogflow

  let plateNumber = req.body.queryResult.parameters.plateNumber;
  console.log(`function validateLicensePlateNumber, $plateNumber = ${plateNumber}`);
  let pattern = /[^a-zA-Z0-9]{6,7}/;
  // check license plate number, in califonia it's 6 or 7 digit/letters.
  if (plateNumber.length !== 7 && plateNumber.length !== 6) {
    fb_send_message({
      messaging_type: 'text',
      recipient: {
        id: req.body.originalDetectIntentRequest.payload.data.sender.id,
      },
      message: {
        text: 'Sorry I cannot verify the license plate number. It shall be 6 or 7 letters.'
      }
    });
  } else if (plateNumber.match(pattern) !== null) {
    fb_send_message({
      messaging_type: 'text',
      recipient: {
        id: req.body.originalDetectIntentRequest.payload.data.sender.id,
      },
      message: {
        text: 'Sorry this license plate number is invalid. Please try again.'
      }
    });
  } else {
    console.log('use dialogflow\'s backflow');
  }
}

function showPaymentOptions(req, res, next) {
  console.log('original=' + JSON.stringify(req.body.originalDetectIntentRequest));
  fb_send_message({
    recipient: {
      id: req.body.originalDetectIntentRequest.payload.data.sender.id,
    },
    message: {
      text: 'Want to use Apple Pay?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Yes',
          payload: 'yes',
        },
        {
          content_type: 'text',
          title: 'I\'ll use something else.',
          payload: 'others',
        },
      ]
    }
  }).then(({ body }) => {
    console.log(`response=${JSON.stringify(body)}`);
    res.end();
  }).catch((error) => {
    console.log(`error=${error}`);
    res.end();
  });
}

function juryOptions(req, res, next) {
  fb_send_message({
    recipient: {
      id: req.body.originalDetectIntentRequest.payload.data.sender.id,
    },
    message: {
      text: 'I might be able to help you request an excuse from jury duty.',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Medical Issue',
        },
        {
          content_type: 'text',
          title: 'Financial Hardship',
        },
        {
          content_type: 'text',
          title: 'Personal Obligation - Full-Time Care',
        },
        {
          content_type: 'text',
          title: 'Transportation Problem',
        },
        {
          content_type: 'text',
          title: 'Prior Service',
        },
      ]
    }
  }).then(({ body }) => {
    console.log(`response=${JSON.stringify(body)}`);
    res.end();
  }).catch((error) => {
    console.log(`error=${error}`);
    res.end();
  });
}

function applePayNow(req, res, next) {
}

// dialogflow webhook
router.post('/dialogflow', function (req, res, next) {
  console.log(`req=${JSON.stringify(req.body)}`);

  const { body } = req;
  const intent_name = body.queryResult.intent.name;
  const intent_prefix = 'projects/tinco-1e8d6/agent/intents/';
  if (intent_name === intent_prefix + INTENT_IDS.RIGHT_CAR_AND_ZIP) {
    validateLicensePlateNumber(req, res, next);
    res.status(200).end();
  } else if (intent_name === intent_prefix + INTENT_IDS.PAY_NOW_YES) {
    applePayNow(req, res, next)
    res.status(200).end();
  } else if (intent_name === intent_prefix + INTENT_IDS.PAY_NOW) {
    showPaymentOptions(req, res, next);
    res.status(200).end();
  } else if (intent_name === intent_prefix + INTENT_IDS.JURY_DUTY) {
    juryOptions(req, res, next)
    res.status(200).end();
  }

  next()
});

// facebook messenger webhook
router.post('/webhook', (req, res, next) => {
  const body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the message. entry.messaging is an array, but
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
  next()
})

module.exports = router;
