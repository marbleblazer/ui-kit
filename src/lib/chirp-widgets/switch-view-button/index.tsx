import { PinIcon } from '@chirp/ui/assets/icons';
import { IconButton } from '../../icon-button';

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
            variant="gray"
            sx={{
                height: '20px',
                padding: 0,
                color: isAccent ? 'text.text8' : 'text.text8',
                '&:hover': {
                    color: isAccent ? 'text.text4' : 'text.text4',
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