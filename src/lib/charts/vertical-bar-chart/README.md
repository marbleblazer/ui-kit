# VerticalBarChart Component

A customizable vertical bar chart component built using [ECharts](https://echarts.apache.org/). This component is designed to display a list of values as vertical bars with customizable colors, units, and style options.

## Installation

Install the required dependencies:

```bash
npm install echarts echarts-for-react
```

## Usage

```tsx
import VerticalBarChart from '@chirpwireless/ui-kit';

const data = [50, 70, 80, 90, 60];

<VerticalBarChart data={data} style={{ height: '400px', width: '100%' }} color="#FF5733" unit="kg" />;
```

## Properties

| Name    | Description                                                                            | Type                          | Default Value |
| ------- | -------------------------------------------------------------------------------------- | ----------------------------- | ------------- |
| `data`  | The data for the chart, represented as an array of numbers or strings.                 | `VerticalBarsChartDataType[]` | -             |
| `style` | Custom styles for the chart.                                                           | `CSSProperties`               | -             |
| `color` | The color of the bars.                                                                 | `string`                      | -             |
| `unit`  | The unit of measurement displayed next to the data values. Default is an empty string. | `string`                      | `''`          |

## Features

- **Vertical Bars**: Displays data in a vertical bar format.
- **Customizable Bars Color**: Allows customization of the bars' color.
- **Customizable Unit**: You can add a unit next to the values displayed on the bars.
- **Responsive**: The chart adapts to different screen sizes with custom styling.
- **Dynamic Padding**: If there are less than 10 items, the chart adds empty values to fill up the space.

## Example

### Basic Example

```tsx
import VerticalBarChart from '@chirpwireless/ui-kit';

const data = [100, 200, 300, 400, 500];

<VerticalBarChart data={data} style={{ height: '400px', width: '100%' }} color="#FF0000" unit="kg" />;
```

### Customizing Units and Colors

```tsx
const data = [15, 30, 45, 60];

<VerticalBarChart data={data} style={{ height: '400px', width: '100%' }} color="#0000FF" unit="m/s" />;
```

## Notes

- The `data` can be a mix of numbers and strings. Only valid numbers or non-empty strings will be displayed.
- The `unit` is optional. If provided, it will be displayed next to each data point in the chart.
- If the `data` array has fewer than 10 items, empty values will be added to make up the difference, ensuring that the chart always has 10 items.
