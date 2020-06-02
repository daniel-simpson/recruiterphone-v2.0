# Recruiterphone v2.0

This is a quick and dirty softphone implementation of an idea I had a few years ago when working with lots of different Recruiters (who _looooove_ talking on the phone) and my introverted ass that would rather disappear into a hole in the earth than talk on the phone.

Still a work in progress at the moment but the idea is:

- Keep my privacy by providing a softphone phone number to recruiters during the job hunt process. Optionally turn off the phone number when the hunt is over to avoid unnecessary soliciting (but I probably won't do this unless I'm getting hounded)

## But what does it actually _do?_

- For incoming calls:
  - FUTURE ENHANCEMENT: If there is no caller ID, screen it (skip forwarding to my phone number)
  - FUTURE ENHANCEMENT: Try to forward the call to my actual phone number
  - Play a voicemail message and take a message
  - FUTURE ENHANCEMENT: Log the call details to a CRM (Airtable at present)
- For incoming messages:
  - Forward through to my actual phone number
  - FUTURE ENHANCEMENT: Log the text to a CRM (Airtable at present)

I've got a few half-baked ideas around outgoing calls and texts, but I'll play around with [Twilio Client](https://www.twilio.com/client) later. _Might_ even build a React Native app to show CRM style details on incoming WebRTC calls.. but lets be honest this is a side project. Thats _super_ unlikely to get finished.

## Setup

- Provision a mobile phone number through Twilio console or CLI (more details later)
  - TODO: Add a script to help with setup (and deployment targets)
- Deploy the code in this repo to a Twilio Serverless setup
- Hook up the mobile number to be handled by this code
  - TODO: Add a script to ensure mobile number setup if pointing to latest version of deployed code
  - TODO: Add TwiML bin fallback and automated deployment
