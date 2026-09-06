import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    const injectScript = document.createElement("script");
    injectScript.src =
      "https://cdn.botpress.cloud/webchat/v5.0/inject.js";
    injectScript.async = false;

    const configScript = document.createElement("script");
    configScript.src =
      "https://files.bpcontent.cloud/2026/09/06/16/20260906165308-D1QG3XIY.js";
    configScript.defer = true;

    document.head.appendChild(injectScript);
    document.head.appendChild(configScript);

    return () => {
      injectScript.remove();
      configScript.remove();
    };
  }, []);

  return null;
}
