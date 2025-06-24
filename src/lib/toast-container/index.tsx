import * as S from './style';

export const ToastContainer = () => {
    return (
        <S.ToastContainer
            autoClose={20000}
            closeOnClick={false}
            icon={false}
            hideProgressBar
            stacked
            position="bottom-right"
        />
    );
};
