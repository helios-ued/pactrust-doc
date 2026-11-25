import { useEffect, useState } from "react";

export const RESEND_COOLDOWN_SEC = 56;

export function useResendCooldown(initial = RESEND_COOLDOWN_SEC) {
  const [secondsLeft, setSecondsLeft] = useState(initial);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = window.setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [secondsLeft]);

  function restart() {
    setSecondsLeft(RESEND_COOLDOWN_SEC);
  }

  return { secondsLeft, restart };
}
