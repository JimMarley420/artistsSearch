import { useState } from "react";
import { getApiKey, setApiKey, getPreferOfficial, setPreferOfficial } from "./storage.ts";

interface SettingsFormProps {
  onClose: () => void;
}

export function SettingsForm({ onClose }: SettingsFormProps) {
  const [apiKey, setApiKeyState] = useState(getApiKey() || "");
  const [preferOfficial, setPreferOfficialState] = useState(getPreferOfficial());

  const handleSave = () => {
    setApiKey(apiKey.trim());
    setPreferOfficial(preferOfficial);
    onClose();
    Spicetify.showNotification("YouTube API settings saved");
  };

  return (
    <div className="copy-youtube-settings">
      <div className="copy-youtube-settings-field">
        <label className="copy-youtube-settings-label" htmlFor="youtube-api-key">
          Google YouTube API Key
        </label>
        <input
          className="copy-youtube-settings-input"
          id="youtube-api-key"
          onChange={(e) => setApiKeyState((e.target as HTMLInputElement).value)}
          placeholder="Enter your YouTube Data API v3 key"
          type="text"
          value={apiKey}
        />
      </div>

      <div className="copy-youtube-settings-field">
        <label className="copy-youtube-settings-checkbox">
          <input
            checked={preferOfficial}
            onChange={(e) => setPreferOfficialState((e.target as HTMLInputElement).checked)}
            type="checkbox"
          />
          <span>Prefer official videos</span>
        </label>
      </div>

      <div className="copy-youtube-settings-buttons">
        <button className="copy-youtube-settings-btn cancel" onClick={onClose} type="button">
          Cancel
        </button>
        <button className="copy-youtube-settings-btn save" onClick={handleSave} type="button">
          Save
        </button>
      </div>
    </div>
  );
}
