import { CloseIcon } from '@chirp/ui/assets/icons';
import { styled } from '@mui/material';
import { ToastContainer as RTToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastContainer = styled(RTToastContainer)`
    .Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
        opacity: 0.1;
    }
    .Toastify__toast--stacked[data-collapsed='true']:not(:last-child) {
        &:nth-last-child(2) {
            > * {
                opacity: 0.9;
            }
        }
        &:nth-last-child(3) {
            > * {
                opacity: 0.8;
            }
        }
        &:nth-last-child(4) {
            > * {
                opacity: 0.7;
            }
        }
        &:nth-last-child(5) {
            > * {
                opacity: 0.6;
            }
        }
        &:nth-last-child(6) {
            > * {
                opacity: 0.5;
            }
        }
        &:nth-last-child(7) {
            > * {
                opacity: 0.4;
            }
        }
    }
    .Toastify__toast--stacked {
        &::after {
            display: none !important;
        }
    }
    .Toastify__progress-bar--wrp {
        visibility: hidden !important;
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
