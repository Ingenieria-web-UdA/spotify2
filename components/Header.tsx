const Header = () => {
  return (
    <header>
        <div className="navigation-buttons">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_25_33)">
                <path d="M11.03 0.47C11.1705 0.610625 11.2493 0.801249 11.2493 1C11.2493 1.19875 11.1705 1.38937 11.03 1.53L4.56 8L11.03 14.47C11.1037 14.5387 11.1628 14.6215 11.2038 14.7135C11.2448 14.8055 11.2668 14.9048 11.2686 15.0055C11.2704 15.1062 11.2518 15.2062 11.2141 15.2996C11.1764 15.393 11.1203 15.4778 11.049 15.549C10.9778 15.6203 10.893 15.6764 10.7996 15.7141C10.7062 15.7518 10.6062 15.7704 10.5055 15.7686C10.4048 15.7668 10.3055 15.7448 10.2135 15.7038C10.1215 15.6628 10.0387 15.6037 9.97 15.53L2.44 8L9.97 0.47C10.1106 0.32955 10.3013 0.25066 10.5 0.25066C10.6988 0.25066 10.8894 0.32955 11.03 0.47Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_25_33">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <button>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_25_37)">
                    <path d="M4.97 0.47C4.82955 0.610625 4.75066 0.801249 4.75066 1C4.75066 1.19875 4.82955 1.38937 4.97 1.53L11.44 8L4.97 14.47C4.89631 14.5387 4.83721 14.6215 4.79622 14.7135C4.75523 14.8055 4.73319 14.9048 4.73141 15.0055C4.72963 15.1062 4.74816 15.2062 4.78588 15.2996C4.8236 15.393 4.87974 15.4778 4.95096 15.549C5.02218 15.6203 5.10701 15.6764 5.2004 15.7141C5.29379 15.7518 5.39382 15.7704 5.49452 15.7686C5.59523 15.7668 5.69454 15.7448 5.78654 15.7038C5.87854 15.6628 5.96134 15.6037 6.03 15.53L13.56 8L6.03 0.47C5.88938 0.32955 5.69875 0.25066 5.5 0.25066C5.30125 0.25066 5.11063 0.32955 4.97 0.47Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_25_37">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
        <div className="auth">
            <span className="sign-up">Sign up</span>
            <div className="log-in">
                <span>Login</span>
            </div>
        </div>
    </header>
  )
}

export {Header};