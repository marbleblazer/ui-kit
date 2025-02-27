import { SensorProps } from './types';

export const HumidityIcon: React.FC<SensorProps> = ({ sensorColor, accentColor }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <circle cx="48" cy="48" r="44" fill={sensorColor} />
            <circle cx="48" cy="48" r="44" fill={accentColor} />
            <g filter="url(#filter0_d_82_49493)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M89 48C89 70.6437 70.6437 89 48 89C25.3563 89 7 70.6437 7 48C7 25.3563 25.3563 7 48 7C70.6437 7 89 25.3563 89 48ZM47.75 15V11H48.25V15H47.75ZM47.75 81V85H48.25V81H47.75ZM15 48.25H11V47.75H15V48.25ZM81 48.25H85V47.75H81V48.25ZM56.2994 16.0597L57.3347 12.196L57.8177 12.3254L56.7824 16.1891L56.2994 16.0597ZM39.2174 79.8108L38.1821 83.6745L38.665 83.804L39.7003 79.9403L39.2174 79.8108ZM16.0597 39.7006L12.196 38.6653L12.3254 38.1823L16.1891 39.2176L16.0597 39.7006ZM79.8108 56.7826L83.6745 57.8179L83.804 57.335L79.9403 56.2997L79.8108 56.7826ZM64.2835 19.2962L66.2835 15.8321L66.7165 16.0821L64.7165 19.5462L64.2835 19.2962ZM31.2835 76.4538L29.2835 79.9179L29.7165 80.1679L31.7165 76.7038L31.2835 76.4538ZM19.2961 31.7165L15.832 29.7165L16.082 29.2835L19.5461 31.2835L19.2961 31.7165ZM76.4538 64.7165L79.9179 66.7165L80.1679 66.2835L76.7038 64.2835L76.4538 64.7165ZM71.1579 24.4887L73.9863 21.6603L74.3399 22.0138L71.5114 24.8423L71.1579 24.4887ZM24.4888 71.1577L21.6604 73.9862L22.014 74.3397L24.8424 71.5113L24.4888 71.1577ZM24.4886 24.8421L21.6601 22.0137L22.0137 21.6601L24.8421 24.4886L24.4886 24.8421ZM71.1576 71.5112L73.986 74.3396L74.3396 73.986L71.5112 71.1576L71.1576 71.5112ZM76.4539 31.2835L79.918 29.2835L80.168 29.7165L76.7039 31.7165L76.4539 31.2835ZM19.2962 64.2835L15.8321 66.2835L16.0821 66.7165L19.5462 64.7165L19.2962 64.2835ZM31.2835 19.5461L29.2835 16.082L29.7165 15.832L31.7165 19.2961L31.2835 19.5461ZM64.2835 76.7038L66.2835 80.1679L66.7165 79.9179L64.7165 76.4538L64.2835 76.7038ZM79.8109 39.2175L83.6746 38.1822L83.804 38.6652L79.9403 39.7004L79.8109 39.2175ZM16.0597 56.2995L12.196 57.3348L12.3255 57.8178L16.1892 56.7825L16.0597 56.2995ZM39.2176 16.1891L38.1823 12.3254L38.6653 12.196L39.7006 16.0597L39.2176 16.1891ZM56.2997 79.9403L57.335 83.804L57.8179 83.6745L56.7826 79.8108L56.2997 79.9403Z"
                    fill={sensorColor}
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_82_49493"
                    x="1.5"
                    y="1.5"
                    width="93"
                    height="93"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2.75" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_82_49493" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_82_49493" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};
