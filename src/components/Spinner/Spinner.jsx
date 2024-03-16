import styles from './Spinner.module.css'
export default function Spinner({ color = "#777777", text = "در حال بارگیری" }) {
    return (
        <div className="flex flex-col gap-4 items-center w-full justify-center scale-50">
            <svg className={`${styles.pl1} opacity-70`} viewBox="0 0 128 128" width="128px" height="128px">
                <defs>
                    <linearGradient x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                    <mask>
                        <rect x="0" y="0" width="128" height="128" />
                    </mask>
                </defs>
                <g fill={color}>
                    <g className={`${styles.pl1g}`}>
                        <g transform="translate(20,20) rotate(0,44,44)">
                            <g>
                                <rect fill={color} className={`${styles.pl1rect}`} rx="8" ry="8" width="40" height="40" />
                                <rect fill={color} className={`${styles.pl1rect}`} rx="8" ry="8" width="40" height="40" transform="translate(0,48)" />
                            </g>
                            <g transform="rotate(180,44,44)">
                                <rect fill={color} className={`${styles.pl1rect}`} rx="8" ry="8" width="40" height="40" />
                                <rect fill={color} className={`${styles.pl1rect}`} rx="8" ry="8" width="40" height="40" transform="translate(0,48)" />
                            </g>
                        </g>
                    </g>
                </g>
                <g>
                    <g className={`${styles.pl1g}`}>
                        <g transform="translate(20,20) rotate(0,44,44)">
                            <g>
                                <rect fill={color} className={`${styles.pl1rect}`} rx="8" ry="8" width="40" height="40" />
                                <rect fill={color} className={`${styles.pl1rect}`} rx="8" ry="8" width="40" height="40" transform="translate(0,48)" />
                            </g>
                            <g transform="rotate(180,44,44)">
                                <rect fill={color} className={`${styles.pl1rect}`} rx="8" ry="8" width="40" height="40" />
                                <rect fill={color} className={`${styles.pl1rect}`} rx="8" ry="8" width="40" height="40" transform="translate(0,48)" />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <span className="text-2xl">
                {text}
            </span>
        </div>
    )
}
