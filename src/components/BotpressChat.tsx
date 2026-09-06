import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://files.bpcontent.cloud/2026/09/06/16/20260906165308-D1QG3XIY.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
}
