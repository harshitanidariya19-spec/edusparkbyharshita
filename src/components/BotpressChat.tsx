import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cdn.botpress.cloud/webchat/v5.0/inject.js";

    script.async = true;

    document.body.appendChild(script);

    const configScript = document.createElement("script");

    configScript.src =
      "https://files.bpcontent.cloud/2026/09/06/16/20260906165308-D1QG3XIY.js";

    configScript.async = true;

    document.body.appendChild(configScript);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }

      if (document.body.contains(configScript)) {
        document.body.removeChild(configScript);
      }
    };
  }, []);

  return null;
}
