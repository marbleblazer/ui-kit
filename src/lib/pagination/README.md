# Pagination Component

A customizable pagination component built using Material UI and styled for your application.

## Usage

```tsx
import { Pagination } from '@chirpwireless/ui-kit';

<Pagination count={10} onChange={(event, page) => console.log(page)} />;
```

## Properties

This component accepts all the props of MUI's [`Pagination`](https://mui.com/material-ui/react-pagination/) component via `PaginationProps` from `@mui/lab`.

| Name       | Description                                                                     | Type       | Default Value |
| ---------- | ------------------------------------------------------------------------------- | ---------- | ------------- |
| `count`    | The total number of pages.                                                      | `number`   | —             |
| `page`     | The current page number.                                                        | `number`   | `1`           |
| `onChange` | Callback fired when the page changes.                                           | `function` | —             |
| `color`    | The color of the component.                                                     | `string`   | `'primary'`   |
| `size`     | The size of the pagination buttons. Can be `'small'`, `'medium'`, or `'large'`. | `string`   | `'medium'`    |
| `variant`  | The variant to use. Can be `'text'` or `'outlined'`.                            | `string`   | `'text'`      |

## Features

- **Material UI Integration**: Built on top of MUI's robust Pagination component.
- **Custom Styling**: Fully styled with consistent design system using styled-components.
- **Controlled Behavior**: Supports controlled state via page and onChange.
