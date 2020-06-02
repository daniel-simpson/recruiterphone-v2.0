import "@twilio-labs/serverless-runtime-types";

import { TextMessageHandler, SendTextMessage } from "./twilio";

export const handler: TextMessageHandler = function (context, event, callback) {
  const message = `FWD ${event.From}: ${event.Body}`;

  // TODO V2: Log this message to Airtable

  SendTextMessage(context, event, message);
  callback(null, "OK");
};
