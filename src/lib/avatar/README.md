# Avatar

The `Avatar` component is used to display user profile images or initials when an image is not available.

## Usage

```tsx
import { Avatar } from '@chirpwireless/ui-kit';

<Avatar avatarUrl="https://example.com/avatar.jpg" userName="scotch" />;
```

## Behavior

- If `avatarUrl` is provided, it renders the image.
- If `avatarUrl` is not provided, but `userName` is, it generates initials using `getStringAvatar`.
- If neither `avatarUrl` nor `userName` is provided, it renders a default `UserBoardIcon`.

## Properties

| Name      | Description                           | Type      | Default |
| --------- | ------------------------------------- | --------- | ------- |
| avatarUrl | URL of the user's avatar image        | `string`  |         |
| userName  | Name of the user to generate initials | `string`  |         |
| sx        | Custom styles using MUI's `SxProps`   | `SxProps` |         |

## Styled Avatar

The component uses a styled `Avatar` from MUI with the following styles:

- Text color from `theme.palette.text.text8`
- Background color from `theme.palette.background.background5`
- Border with color from `theme.palette.border.border4`

## Example with Custom Styles

```tsx
<Avatar userName="User Name" sx={{ width: 50, height: 50, backgroundColor: 'red' }} />
```
