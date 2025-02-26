# Badge

The `Badge` component is used to display status indicators with different variants.

## Usage

```tsx
import { Badge, SimpleBadge } from '@chirpwireless/ui-kit';

<Badge text="New" variant="success" />;
<SimpleBadge text="Alert" variant="danger" />;
```

## Variants

The component supports three variants:

- `primary` (default)
- `danger`
- `success`

## Properties

### `Badge` Props

| Name    | Description                                      | Type                                              | Default   |
| ------- | ------------------------------------------------ | ------------------------------------------------- | --------- |
| index   | Index of the badge (useful for dynamic lists)    | `number`                                          |           |
| text    | The content of the badge                         | `string`                                          | Required  |
| getRef  | Function to get a reference to the badge element | `(index: number) => React.RefObject<HTMLElement>` |           |
| variant | The badge variant                                | `'primary'  'danger'  'success'`                  | 'primary' |

### `SimpleBadge` Props

| Name    | Description              | Type                           | Default   |
| ------- | ------------------------ | ------------------------------ | --------- |
| text    | The content of the badge | `string, ReactNode`            | Required  |
| variant | The badge variant        | `'primary' 'danger' 'success'` | 'primary' |

## Styling

The `Badge` and `SimpleBadge` components are styled using MUI's `styled` API. They have:

- A `borderRadius` of `12px`
- Padding of `4px 12px`
- A default background color based on the `theme.palette`
- Support for different variants with corresponding background colors

## Example with Custom Styles

```tsx
<Badge text="Updated" variant="danger" />;
<SimpleBadge text={<strong>Important</strong>} variant="success" />;
```
