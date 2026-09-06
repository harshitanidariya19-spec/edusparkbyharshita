import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v5.0/inject.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src =
      "https://files.bpcontent.cloud/2026/09/06/16/20260906165308-D1QG3XIY.js";
    script2.defer = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null;
}
