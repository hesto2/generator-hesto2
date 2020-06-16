import { Context, SQSEvent } from 'aws-lambda';
import execute from './execute';
export const handler = async (event: SQSEvent, context: Context) => {
  execute();
};
