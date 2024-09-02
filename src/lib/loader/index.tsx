import { CircularProgress, Stack, CircularProgressProps } from '@mui/material';

export const Loader = (props: CircularProgressProps) => {
    return (
        <Stack width="100%" height="100%" flexGrow={1} justifyContent="center" alignItems="center">
            <CircularProgress size={40} {...props} />
        </Stack>
    );
};
