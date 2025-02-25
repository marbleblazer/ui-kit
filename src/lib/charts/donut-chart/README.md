# DonutChart

`DonutChart` is a reusable donut chart component built using `echarts-for-react` and `echarts`.

## Installation

Ensure you have the required dependencies installed:

```sh
npm install echarts echarts-for-react @mui/material
```

## Usage

```tsx
import { DonutChart } from from '@chirpwireless/ui-kit';

const data = [
    { name: 'Category A', value: 40 },
    { name: 'Category B', value: 30 },
    { name: 'Category C', value: 30 },
];

const colors = ['#FF5733', '#33FF57', '#3357FF'];

<DonutChart data={data} colors={colors} centerText="75%" />;
```

## Props

| Prop         | Type                   | Description                                     |
| ------------ | ---------------------- | ----------------------------------------------- |
| `data`       | `DonutChartDataType[]` | Array of data points for the chart.             |
| `colors`     | `string[]`             | Array of colors corresponding to data points.   |
| `centerText` | `React.ReactNode`      | Optional text or component displayed in center. |

### `DonutChartDataType`

```ts
type DonutChartDataType = {
    name: string;
    value: number;
};
```

## Notes

- The chart does not support interactive tooltips or legend out-of-the-box.
- The `centerText` prop allows customization of the text inside the donut.
- The component uses `echarts` for rendering and `@mui/material` for theming support.

## Example

```tsx
<DonutChart
    data={[
        { name: 'Completed', value: 75 },
        { name: 'Pending', value: 25 },
    ]}
    colors={['#00C853', '#FF5252']}
    centerText="75%"
/>
```
