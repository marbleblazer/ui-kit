import { IconButton } from '@mui/material';
import { PinIcon } from '@chirp/ui/assets/icons';

type Props = {
    attributeName: string;
    isAccent?: boolean;
    disabled?: boolean;
    switchView(attributeName: string): void;
};

export const SwitchViewButton: React.FC<Props> = ({
    attributeName,
    isAccent = false,
    disabled = false,
    switchView,
}) => {
    const handleClick = () => {
        switchView(attributeName);
    };

    return (
        <IconButton
            sx={{
                height: '20px',
                padding: 0,
                color: 'lightShades.quaternary',
                '&:hover': {
                    color: 'lightShades.ternary',
                    bgcolor: 'transparent',
                },
            }}
            disabled={disabled}
            onClick={handleClick}
        >
            <PinIcon outlined={!isAccent} />
        </IconButton>
    );
};
