import { CloseIcon } from '@chirp/ui/assets/icons';
import { styled } from '@mui/material';
import { ToastContainer as RTToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const ToastContainer = styled(RTToastContainer)`
    .Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
        opacity: 0.1;
    }
    .Toastify__toast--stacked {
        &::after {
            display: none !important;
        }
    }
    .Toastify__progress-bar--wrp {
        display: none !important;
    }

    &&&.Toastify__toast-container {
        background: transparent;
        width: min(400px, calc(100% - 2rem));
        padding: 0;
        bottom: 16px;
        right: 32px;
    }
    .Toastify__toast {
        background: transparent;
        padding: 0;
        border-radius: 8px;
        min-height: 50px;
    }
    .Toastify__toast-body {
        padding: 0;
    }
`;

export const StyledCrossHairIcon = styled(CloseIcon)({
    position: 'absolute',
    top: 4,
    right: 4,
    cursor: 'pointer',
});
