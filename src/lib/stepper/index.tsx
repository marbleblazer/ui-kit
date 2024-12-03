import { FC } from 'react';

import { Stack, IconButton, useTheme } from '@mui/material';
import { StepIcon } from '@chirp/ui/assets/icons';

export interface StepperProps {
    activeStep: number;
    handleSetStep?: (step: number) => void;
    steps: number[];
}

export const Stepper: FC<StepperProps> = ({ activeStep, handleSetStep, steps }) => {
    const theme = useTheme();

    if (!steps?.length) {
        return null;
    }

    return (
        <Stack direction="row" gap="8px" height="24px" alignItems="center" justifyContent="center">
            {steps.map((step) => (
                <IconButton
                    key={step}
                    sx={{
                        color: activeStep === step ? theme.palette.base.color6 : theme.palette.background.background12,
                        width: activeStep === step ? '6px' : '4px',
                        padding: '0',
                        cursor: handleSetStep ? 'pointer' : 'default',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                    onClick={() => handleSetStep?.(step)}
                >
                    <StepIcon />
                </IconButton>
            ))}
        </Stack>
    );
};
