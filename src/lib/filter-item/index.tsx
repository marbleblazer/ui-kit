import * as S from './style';

export type FilterItemProps = {
  size?: 'small' | 'big';
  variant?: 'primary' | 'secondary';
  label: string;
  checked?: boolean;
  endAdornmentText?: string;
  onChange: () => void;
};

export const FilterItem: React.FC<FilterItemProps> = ({
  label,
  checked,
  size = 'small',
  variant = 'primary',
  endAdornmentText,
  onChange,
}) => {
  return (
    <S.Label>
      <S.HiddenInput type='checkbox' onChange={onChange} checked={checked} />
      <S.Checkmark
        component='span'
        checked={checked}
        hasAdornment={Boolean(endAdornmentText)}
        size={size}
        variant={variant}
      >
        {label}
        {endAdornmentText && <S.Adornment checked={checked}>{endAdornmentText}</S.Adornment>}
      </S.Checkmark>
    </S.Label>
  );
};
