import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    // Don't load Botpress more than once
    if (document.getElementById("botpress-inject")) {
      return;
    }

    const injectScript = document.createElement("script");

    injectScript.id = "botpress-inject";
    injectScript.src =
      "https://cdn.botpress.cloud/webchat/v5.0/inject.js";
    injectScript.async = true;

    injectScript.onload = () => {
      // Load your EduSpark bot after Botpress Webchat is ready
      if (document.getElementById("botpress-config")) {
        return;
      }

      const configScript = document.createElement("script");

      configScript.id = "botpress-config";
      configScript.src =
        "https://files.bpcontent.cloud/2026/09/06/16/20260906165308-D1QG3XIY.js";
      configScript.async = true;

      document.body.appendChild(configScript);
    };

    document.body.appendChild(injectScript);
  }, []);

  return null;
}
