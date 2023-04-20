export const AddIcon: React.FC<{ rotate?: number }> = ({ rotate = 0 }) => (
    <svg style={{transform: `rotate(${rotate}deg)`, transition: "all .3s" }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_124_3658)">
            <circle cx="12" cy="12" r="12" fill="#F58020"/>
            <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill="#FDFDFF"/>
        </g>
        <defs>
            <clipPath id="clip0_124_3658">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);
