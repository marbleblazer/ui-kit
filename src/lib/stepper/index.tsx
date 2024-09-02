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
        <Stack direction="row" gap="8px" height="24px" alignItems="center" justifyContent="center" mb="32px">
            {steps.map((step) => (
                <IconButton
                    key={step}
                    sx={{
                        color:
                            activeStep === step ? theme.palette.primaryColors.accent : theme.palette.darkShades.fifth,
                        width: '6px',
                        padding: '0',
                        cursor: handleSetStep ? 'pointer' : 'default',
                    }}
                    onClick={() => handleSetStep?.(step)}
                >
                    <StepIcon />
                </IconButton>
            ))}
        </Stack>
    );
};