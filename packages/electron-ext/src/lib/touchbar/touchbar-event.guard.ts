import { IpcEventMessage } from '../ipc-main/ipc-message.type.js';
import { TouchbarSetEvent, TouchbarPatchEvent } from './touchbar-event.type.js';

export function isTouchbarSetEvent(u: IpcEventMessage): u is TouchbarSetEvent {
  return 'touchbar' in u;
}

export function isTouchbarUpdateEvent(
  u: IpcEventMessage,
): u is TouchbarPatchEvent {
  return 'items' in u;
}
