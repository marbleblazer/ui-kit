import { CloseIcon } from '@chirp/ui/assets/icons';
import * as S from './style';
import Box from '@mui/material/Box';

export const ToastContainer = () => {
    return (
        <S.ToastContainer
            autoClose={20000}
            closeOnClick={false}
            icon={false}
            hideProgressBar
            stacked
            closeButton={({ ...props }) => (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 4,
                        right: 4,
                        cursor: 'pointer',
                    }}
                    {...props}
                    onClick={props.closeToast}
                >
                    <CloseIcon />
                </Box>
            )}
            position="bottom-right"
        />
    );
};
