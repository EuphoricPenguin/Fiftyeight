module.exports = [
  {
    "type": "heading",
    "defaultValue": "fiftyeight Configuration"
  },
  {
    "type": "text",
    "defaultValue": "Customize your watchface appearance and behavior."
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Display Settings"
      },
      {
        "type": "toggle",
        "messageKey": "DarkMode",
        "label": "Dark Mode",
        "defaultValue": false,
        "description": "Enable dark mode (white text on black background)"
      },
      {
        "type": "toggle",
        "messageKey": "ShowAmPm",
        "label": "Show AM/PM Indicator",
        "defaultValue": false,
        "description": "Display AM/PM indicator in top left corner"
      },
      {
        "type": "toggle",
        "messageKey": "Use24HourFormat",
        "label": "24-Hour Time Format",
        "defaultValue": false,
        "description": "Use 24-hour format instead of 12-hour format"
      },
      {
        "type": "toggle",
        "messageKey": "UseTwoLetterDay",
        "label": "Two-Letter Day Abbreviations",
        "defaultValue": false,
        "description": "Use 2-letter day abbreviations (SU, MO, etc.) instead of 3-letter"
      }
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];
