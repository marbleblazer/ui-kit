import { CloseIcon } from '@chirp/ui/assets/icons';
import { styled } from '@mui/material';
import { ToastContainer as RTToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastContainer = styled(RTToastContainer)`
    --toastify-toast-min-height: 62px;

    .Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
        opacity: 0.1;
    }
    .Toastify__toast--stacked[data-collapsed='true']:not(:last-child) {
        &:nth-last-of-type() {
            > * {
                opacity: 0.9;
            }
        }
        &:nth-last-of-type(3) {
            > * {
                opacity: 0.8;
            }
        }
        &:nth-last-of-type(4) {
            > * {
                opacity: 0.7;
            }
        }
        &:nth-last-of-type(5) {
            > * {
                opacity: 0.6;
            }
        }
        &:nth-last-of-type(6) {
            > * {
                opacity: 0.5;
            }
        }
        &:nth-last-of-type(7) {
            > * {
                opacity: 0.4;
            }
        }
        &:nth-last-of-type(8) {
            > * {
                opacity: 0.3;
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
