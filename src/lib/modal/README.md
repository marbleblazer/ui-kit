# Modal Component

A modal component with a backdrop effect and customizable content, built using Material UI.

## Usage

```tsx
import { Modal } from '@@chirpwireless/ui-kit';

<Modal
    title="Modal Title"
    description="This is a description for the modal"
    actionComponent={<YourActionComponent />}
/>;
```

### Example:

```tsx
<Modal title="Welcome" description="This is a modal description." actionComponent={<button>Click Me</button>} />
```

## Properties

| Name              | Description                                                         | Type        | Default Value |
| ----------------- | ------------------------------------------------------------------- | ----------- | ------------- |
| `title`           | The title to be displayed in the modal.                             | `string`    | -             |
| `description`     | The description text to be displayed under the title.               | `string`    | -             |
| `actionComponent` | A component to be displayed as the modal's action (e.g., a button). | `ReactNode` | -             |

## Features

- **Backdrop Effect**: A semi-transparent background with a blur effect.
- **Responsive Design**: The modal is responsive and adjusts based on screen size.
- **Customizable**: You can pass any component as the action element.
