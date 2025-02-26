# LanguageSelector Component

The `LanguageSelector` component allows users to select a language from a dropdown list. It provides a convenient way to change the language in an application, and it can be customized with any set of languages.

## Installation

Ensure the required dependencies are installed:

```bash
npm install @mui/material
```

## Usage

```tsx
import { LanguageSelector } from '@chirpwireless/ui-kit';

const languages = {
    en: 'English',
    fr: 'Français',
    es: 'Español',
};

<LanguageSelector
    currentLanguage="en"
    languages={languages}
    onChangeLanguage={(lang) => console.log('Selected language:', lang)}
/>;
```

## Properties

| Name               | Description                                                                                              | Type                     | Default Value |
| ------------------ | -------------------------------------------------------------------------------------------------------- | ------------------------ | ------------- |
| `currentLanguage`  | The currently selected language.                                                                         | `string`                 | -             |
| `languages`        | A record of available languages, where the key is the language code and the value is the language label. | `Record<string, string>` | -             |
| `onChangeLanguage` | Callback function when the language is changed.                                                          | `(lang: string) => void` | -             |

## Example

### Basic Example

```tsx
import { LanguageSelector } from '@chirpwireless/ui-kit';

const languages = {
    en: 'English',
    fr: 'Français',
    de: 'Deutsch',
};

<LanguageSelector
    currentLanguage="en"
    languages={languages}
    onChangeLanguage={(lang) => console.log('Language changed:', lang)}
/>;
```

### Example with Dynamic Language Update

```tsx
import { LanguageSelector } from '@chirpwireless/ui-kit';
import { useState } from 'react';

const languageOptions = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
};

const MyApp = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageChange = (lang: string) => {
        setSelectedLanguage(lang);
    };

    return (
        <LanguageSelector
            currentLanguage={selectedLanguage}
            languages={languageOptions}
            onChangeLanguage={handleLanguageChange}
        />
    );
};

export default MyApp;
```

## Customization

- You can pass a custom set of languages to the `languages` prop, where each key represents a language code (e.g., "en", "fr"), and the value is the language name (e.g., "English", "Français").
- The component provides a custom icon (`TranslateIcon`) which you can replace or customize in the component's styles.

## Notes

- The `LanguageSelector` uses MUI's `Select` component for the dropdown, allowing full customization of the dropdown menu via `MenuProps`.
- The `onChangeLanguage` function is called when a user selects a new language, passing the language code (e.g., `"en"`).
- You can use this component to manage language selection for your app's internationalization feature.
