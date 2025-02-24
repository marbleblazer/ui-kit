# Link

The `Link` component is a styled version of MUI's `Link` with default styles applied.

## Usage

```tsx
import { Link } from '@chirpwireless/ui-kit';

<Link href="https://example.com">Visit Example</Link>;
```

## Properties

The `Link` component extends MUI's `Link`, so it supports all the props available in MUI's `Link` component.

| Name            | Description                               | Type           | Default |
| --------------- | ----------------------------------------- | -------------- | ------- |
| href            | The URL to link to                        | `string`       | `''`    |
| children        | The content inside the link               | `ReactNode`    |         |
| ...MUILinkProps | Any other props supported by MUI's `Link` | `MUILinkProps` |         |

## Example

```tsx
<Link href="https://example.com" target="_blank" rel="noopener noreferrer">
    Open Example
</Link>
```
