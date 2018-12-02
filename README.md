# DVHacks - Tinco

## Project Introduction

Tinco is a virtual assistant or chatbot for solving DMV waiting problems. 

#### Problem

People spend hours or even days in many DMV sites to have their vehicle registration renewed, ID/DL renewed.
The existing online digital applications or Kiosks are unintuitive, confusing and limited. 

#### Solution

We designed a virtual assistant that disrupts the market. It leverages advanced AI technologies to save 
people's time. Seriouly, you could renew your license in 30 seconds! 

## Project Overview

This is a demo to show the concept. 

### Technologies and Programming Languages

- Frontend technologies. 
  - Vue.js
  - HTML
  - CSS
  - Javascript
  - Facebook Customer Chat Plugin
  - Netlify
- Backend technologies. 
  - Heroku
  - node.js
- AI Technologies
  - Google DialogFlow
- Payment System
  - Apple Pay
  - Stripe
- DMV Gateway


### Project Structure

The repo contains multi components above. 

```
.
+-- dialogflow - All the configurations and datasets in dialogflow. 
+-- nodejs - the backend code. Handling bot messages, advanced NLU data, 3rd-party integrations.
+-- public - the template used by Vue
+-- src - the source code of frontend 
```

### Project setup

#### Setup Facebook Customer Chat Plugin

1. Create a [Facebook Page](https://www.facebook.com/pages/creation/).
2. Create a Facebook app at [Facebook Developer Portal](https://developers.facebook.com/apps/).
   * In the Facebook app page created, Add a product *Facebook Messenger*
3. Back in the Facebook Page's Settings, enable Facebook Customer Chat Plugin and whitelist your domain.
   * In the Facebook Customer Chat Plugin's setup modal, you will see the embedded code.
4. Replace the ```page_id``` in the page [public/index.html](./public/index.html)
to 
```html
<!-- Your customer chat code -->
<div class="fb-customerchat"
     attribution=setup_tool
     page_id="516083218869346">
 </div>
```

#### Setup Google DialogFlow

1. Register a DialogFlow account
2. Createa a DialogFlow Agent
3. In the Intents page, import all *.json files from the [dialogflow/intents](./dialogflow/intents) folder
4. In the Entities page, import all *.json files from the [dialogflow/entities](./dialogflow/entities) folder
5. In the Fulfillment page, Enable Webhook, input the webook URL as described in [Setup Heroku] below

#### Setup Heroku

1. Install a Dyno. Use Hobby plan.
2. use this command to deploy code to heroku
```
git subtree push --prefix nodejs heroku master
```

#### Setup Apple Pay + Stripe

Please follow this instruction, https://stripe.com/docs/apple-pay/web/v2



