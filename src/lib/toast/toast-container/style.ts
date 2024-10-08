import { styled } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const Container = styled(ToastContainer)`
    &&&.Toastify__toast-container {
        background: transparent;
        width: min(400px, calc(100% - 2rem));
        padding: 0;
        bottom: 16px;
        right: 32px;
    }
    .Toastify__toast {
        padding: 0;
        border-radius: 8px;
        min-height: 50px;
    }
    .Toastify__toast-body {
        padding: 0;
    }
`;
