export enum WidgetTypes {
    Graphic = 'graphic',
    Text = 'text',
    Boolean = 'boolean',
    Group = 'group',
}

export type Timequant = 'hour' | 'day' | 'week' | 'month';

export enum Timequants {
    hour = 'hour',
    day = 'day',
    week = 'week',
    month = 'month',
}
export interface DataPoint {
    x: number;
    y: number;
}

export interface Series {
    id: string;
    data: DataPoint[];
}

export type Metric = {
    avg: number;
    count: number;
    max: number;
    min: number;
    first: string;
    last: string;
    delta: string;
    lastDate: string;
};

export type Metrics = {
    [key: string]: Metric;
};

export type AttributeType = WidgetTypes.Graphic | WidgetTypes.Text | WidgetTypes.Boolean | WidgetTypes.Group;

export type SensorType = 'default' | 'none' | 'open_close' | 'air' | 'gas' | 'humidity' | 'light';

export type AttributeSettings = {
    showGraph?: boolean;
    showAlert?: boolean;
    units?: string;
};

export type Settings = {
    [id: string]: {
        [attr: string]: AttributeSettings;
    };
};

export type AnyAttributeConfig = {
    title: string;
    units: string;
    type: AttributeType;
    color: string;
    sensor_type: SensorType;
    icon: string;
    display_value: 'avg' | 'last' | 'first' | 'delta';
    value_map: string;
    valueFrom?: number;
    valueTo?: number;
};

export type NumberAttribute = AnyAttributeConfig & {
    type: WidgetTypes.Graphic;
};

export type StringAttribute = AnyAttributeConfig & {
    type: WidgetTypes.Text;
};

export type GroupAttribute = AnyAttributeConfig & {
    type: WidgetTypes.Group;
};

export type BooleanAttribute = {
    type: WidgetTypes.Boolean;
    alertColor: string;
} & AnyAttributeConfig;

export type AttributeConfig = NumberAttribute | StringAttribute | BooleanAttribute | GroupAttribute;

export type AttributeConfigData = {
    name: string;
    config: AttributeConfig;
};

export type Measurements = {
    [key: string]: AttributeConfig;
};

export type WidgetProps = {
    deviceId: string;
    config: AttributeConfig;
    lastSeen: number | null;
    graphValues: Metrics | null;
    attributeName: string;
    isLoading: boolean;
    isError: boolean;
    timequant: Timequant;
    period?: string;
    currentValue?: number | string | boolean;
    switchView?(attributeName: string): void;
};

export type CalculatedValues = {
    min: number | null;
    max: number | null;
    avg: number | null;
};

export type ValueBoundaries = {
    from: number | null;
    to: number | null;
};
