import * as S from './style';

export const ToastContainer = () => {
    return (
        <S.ToastContainer
            autoClose={2000}
            closeButton={false}
            closeOnClick={false}
            icon={false}
            hideProgressBar
            limit={5}
            position="bottom-right"
        />
    );
};
