import { filter, OperatorFunction } from 'rxjs';
import { isIpcEventMessage, isIpcMessage } from './ipc-message.guard.js';
import { IpcEventMessage, IpcMessage } from './ipc-message.type.js';

export function validateIpcMessage(): OperatorFunction<
  unknown,
  IpcMessage<unknown>
> {
  return filter(isIpcMessage);
}

export function validateIpcEventMessage(): OperatorFunction<
  unknown,
  IpcEventMessage
> {
  return filter(isIpcEventMessage);
}
