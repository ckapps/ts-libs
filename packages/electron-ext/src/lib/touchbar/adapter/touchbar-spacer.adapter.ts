import { TouchBar, TouchBarSpacer } from 'electron';
import { Adapter } from './adapter.js';

export type { TouchBarSpacer };

export interface RxTouchbarSpacerOptions {
  /**
   * Size of spacer, possible values are:
   */
  size?: 'small' | 'large' | 'flexible';
}

export class TouchbarSpacerAdapter
  implements Adapter<TouchBarSpacer, RxTouchbarSpacerOptions>
{
  adapt(options: RxTouchbarSpacerOptions): TouchBarSpacer {
    const { size } = options;

    return new TouchBar.TouchBarSpacer({
      size,
    });
  }
}
