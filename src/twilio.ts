import {
  ServerlessFunctionSignature,
  Context,
} from "@twilio-labs/serverless-runtime-types/types";

export type EnvironmentVariables = {
  VOICEMAIL_MESSAGE: string;
};

export type CallEvent = {
  Direction: "inbound" | "outbound" | string;
  From: string;
  To: string;
};

export type CallHandler = ServerlessFunctionSignature<
  EnvironmentVariables,
  CallEvent
>;

