// TODO - avoid hardcoding particular devices

export type Attributes = {
  valueType?: 'totalValue' | 'lastValue';
  onlyGraphView?: boolean;
};

export type CurrentAttribute = { [key: string]: string | number | boolean | undefined };

export const widgetAttributeNameConfig: { [key: string]: Attributes } = {
  DOOR_OPEN_TIMES: {
    valueType: 'totalValue',
    onlyGraphView: true,
  },
};
