# Loader

A loading spinner component with animation, utilizing Material UI for styling. It displays a circular animated effect with the option to add text alongside the loader.

## Usage

```tsx
import { Loader } from '@chirpwireless/ui-kit';

<Loader text="Loading..." size="large" />;
```

### Example with Text

```tsx
<Loader text="Loading..." />
```

### Example without Text

```tsx
<Loader />
```

## Properties

| Name   | Description                                                             | Type     | Default Value |           |
| ------ | ----------------------------------------------------------------------- | -------- | ------------- | --------- |
| `text` | Text to display alongside the loader.                                   | `string` | `undefined`   |           |
| `size` | Size of the loader, determines the dimensions of the animated elements. | `'small' | 'large'`      | `'small'` |

## Size Configuration

The component supports two sizes:

- `small`: Compact size for minimal loaders.
- `large`: Larger size for more prominent loaders.

### Example:

```tsx
<Loader size="large" />
```

## Animation

The loader employs an animation with smooth opacity transitions to create a "pulsing" effect. The elements rotate around the center with periodic opacity changes.
