# Dropdown

The `Dropdown` component provides a simple popper-based dropdown for displaying content relative to an anchor element.

## Usage

```tsx
import { Dropdown } from '@chirpwireless/ui-kit;
import { Button } from '@mui/material';

<Dropdown isOpened={true} anchorEl={<Button>Open</Button>}>
    <div>Dropdown Content</div>
</Dropdown>;
```

## Properties

| Name     | Description                                            | Type        | Default |
| -------- | ------------------------------------------------------ | ----------- | ------- |
| isOpened | Controls whether the dropdown is open or closed        | `boolean`   | `false` |
| anchorEl | The element that serves as the anchor for the dropdown | `ReactNode` |         |

## Behavior

- The dropdown appears relative to the `anchorEl` when `isOpened` is `true`.
- Uses MUI's `Popper` for positioning.
- The anchor element is wrapped in a `div` with a ref for positioning purposes.

## Example

```tsx
const [open, setOpen] = React.useState(false);

<Dropdown isOpened={open} anchorEl={<Button onClick={() => setOpen(!open)}>Toggle</Button>}>
    <div>Dropdown Content</div>
</Dropdown>;
```
