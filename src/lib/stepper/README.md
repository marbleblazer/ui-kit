# Stepper Component

The `Stepper` component provides a visual step indicator, allowing users to navigate through steps in a process. Each step is represented by a clickable icon, and the current active step is highlighted.

## Installation

Ensure the necessary dependencies are installed:

```bash
npm install @mui/material @chirp/ui
```

## Usage

```tsx
import { Stepper } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const steps = [0, 1, 2, 3]; // Example steps

    const handleSetStep = (step: number) => {
        setActiveStep(step);
    };

    return <Stepper activeStep={activeStep} handleSetStep={handleSetStep} steps={steps} />;
};
```

## Props

| Name            | Description                                                                           | Type                     | Default Value |
| --------------- | ------------------------------------------------------------------------------------- | ------------------------ | ------------- |
| `activeStep`    | The current active step that will be highlighted.                                     | `number`                 | `0`           |
| `handleSetStep` | Optional callback function to handle changing the active step when a step is clicked. | `(step: number) => void` | `undefined`   |
| `steps`         | Array of step numbers. Each element represents a step.                                | `number[]`               | `[]`          |

## Example

### Basic Example

```tsx
import { Stepper } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const steps = [0, 1, 2, 3]; // Example steps

    const handleSetStep = (step: number) => {
        setActiveStep(step);
    };

    return (
        <div>
            <Stepper activeStep={activeStep} handleSetStep={handleSetStep} steps={steps} />
        </div>
    );
};
```

### Example with Disabled Step Navigation

```tsx
import { Stepper } from '@chirpwireless/ui-kit';

const MyApp = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const steps = [0, 1, 2, 3];

    return (
        <div>
            <Stepper activeStep={activeStep} steps={steps} />
        </div>
    );
};
```

## Customization

- **Step Icon**: The default step icon is provided by `StepIcon` from `@chirp/ui/assets/icons`. You can customize this by replacing it with a custom icon.
- **Color and Style**: You can modify the colors and size of the step icons by adjusting the `sx` prop in the `Stepper` component.

## Notes

- The `activeStep` prop determines which step is currently active and will be highlighted.
- The `handleSetStep` prop allows you to define custom behavior when a step is clicked, making the steps navigable.
- The component works well in scenarios such as multi-step forms or processes where steps need to be visually represented.
