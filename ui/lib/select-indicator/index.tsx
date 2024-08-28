import { CaretDownIcon } from '@ui/icons/CaretDownIcon';
import * as S from './style';

type Props = {
    className: string;
};

export const SelectIndicator: React.FC<Props> = ({ className }) => {
    return (
        <S.Root className={className}>
            {/* TODO */}
            <CaretDownIcon />
        </S.Root>
    );
};
