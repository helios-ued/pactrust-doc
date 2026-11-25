/** Figma A3 · 01 `8370:5786` · 02 `8370:10268` · 03 `8370:11363` */
export type AuthenticatorBindStep = 1 | 2 | 3;

export function parseAuthenticatorBindStep(raw: string | null): AuthenticatorBindStep {
  const n = Number(raw);
  if (n === 2 || n === 3) return n;
  return 1;
}

/** 同步 URL，便于返回栏 / 刷新 / ?step= 预览 */
export function authenticatorBindStepToSearchParams(
  step: AuthenticatorBindStep,
): Record<string, string> | null {
  if (step === 1) return null;
  return { step: String(step) };
}
