import type { Meta, StoryObj } from '@storybook/react';
import { RangePicker, RangePickerMenu, Typography } from '@chirp/ui/lib';
import { useRef, useState } from 'react';
import moment from 'moment';
import { QUICK_SELECT_OPTIONS } from './constants';
import { useTranslation } from 'react-i18next';

const meta: Meta<typeof RangePicker> = {
    title: 'UI/RangePicker',
    component: RangePicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RangePicker>;

export const Default: Story = {
    render: () => {
        const ref = useRef(null);

        const [openedState, setOpenedState] = useState(false);
        const [dateState, setDateState] = useState<{ start: string; end: string } | null>(null);

        return (
            <>
                <Typography ref={ref} onClick={() => setOpenedState(true)}>
                    {dateState
                        ? `${moment(dateState.start).format('YYYY-MM-DD')} - ${moment(dateState.end).format('YYYY-MM-DD')}`
                        : 'Click to select date'}
                </Typography>
                <RangePickerMenu
                    id="device-actions-menu"
                    anchorEl={ref.current}
                    open={openedState}
                    onClose={() => setOpenedState(false)}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <RangePicker
                        handleCloseCalendar={() => setOpenedState(false)}
                        onClearDate={() => setOpenedState(false)}
                        onDateChange={(after, before) => setDateState({ start: after, end: before })}
                    />
                </RangePickerMenu>
            </>
        );
    },
};

export const WithQuickSelect: Story = {
    render: () => {
        const ref = useRef(null);
        const { t } = useTranslation('uiKit', { keyPrefix: 'RangePicker' });

        const [openedState, setOpenedState] = useState(false);
        const [dateState, setDateState] = useState<{ start: string; end: string } | null>(null);
        const [activeQuickSelectState, setActiveQuickSelectState] = useState<keyof typeof QUICK_SELECT_OPTIONS | null>(
            null,
        );

        return (
            <>
                <Typography ref={ref} onClick={() => setOpenedState(true)}>
                    {activeQuickSelectState
                        ? t(activeQuickSelectState)
                        : dateState
                          ? `${moment(dateState.start).format('YYYY-MM-DD')} - ${moment(dateState.end).format('YYYY-MM-DD')}`
                          : 'Click to select date'}
                </Typography>
                <RangePickerMenu
                    id="device-actions-menu"
                    anchorEl={ref.current}
                    open={openedState}
                    onClose={() => setOpenedState(false)}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <RangePicker
                        withQuickSelect
                        activeQuickSelectState={activeQuickSelectState}
                        setActiveQuickSelectState={setActiveQuickSelectState}
                        handleCloseCalendar={() => setOpenedState(false)}
                        onClearDate={() => setOpenedState(false)}
                        onDateChange={(after, before) => setDateState({ start: after, end: before })}
                    />
                </RangePickerMenu>
            </>
        );
    },
};
