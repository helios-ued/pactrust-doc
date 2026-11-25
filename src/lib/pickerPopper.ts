/** 输入框底边与面板顶边间距（px） */
export const PICKER_POPPER_GAP = 2;

export function pickerPopperTop(rect: DOMRect) {
  return rect.bottom + PICKER_POPPER_GAP;
}
