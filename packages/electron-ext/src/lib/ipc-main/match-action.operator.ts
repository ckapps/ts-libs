import { filter, OperatorFunction } from 'rxjs';
import { IpcEventMessage } from './ipc-message.type.js';

export function matchAction<T extends IpcEventMessage>(
  action: T['action'],
): OperatorFunction<IpcEventMessage, IpcEventMessage> {
  return (obs$) => obs$.pipe(filter((ev) => ev.action === action));
}
