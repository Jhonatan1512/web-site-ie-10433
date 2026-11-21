import styles from "./WelcomeStudentsIllustration.module.css";

export function WelcomeStudentsIllustration() {
  return (
    <div className={styles.stage} aria-label="Estudiantes dando la bienvenida">
      <div className={styles.glowRing} aria-hidden="true" />

      <svg
        viewBox="0 0 400 310"
        className={styles.illustrationSvg}
        role="img"
        aria-label="Niño y niña estudiantes saludando"
      > 
        <defs>
          <linearGradient id="sweaterGreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#196847" />
            <stop offset="100%" stopColor="#0F4C33" />
          </linearGradient>
          <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5C84C" />
            <stop offset="100%" stopColor="#E5A91A" />
          </linearGradient>
          <linearGradient id="basePlatform" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="50%" stopColor="rgba(245,200,76,0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
        </defs>

        <g className={styles.floatingSparkle}>
          <circle cx="52" cy="88" r="5" fill="#F5C84C" opacity="0.85" />
          <path
            d="M342 64 L345 73 L354 76 L345 79 L342 88 L339 79 L330 76 L339 73 Z"
            fill="#F5C84C"
          />
        </g>
        <g className={styles.floatingSparkleDelay}>
          <circle cx="202" cy="46" r="4" fill="#FFFFFF" opacity="0.7" />
          <path
            d="M68 136 L70 142 L76 144 L70 146 L68 152 L66 146 L60 144 L66 142 Z"
            fill="#FFFFFF"
            opacity="0.8"
          />
        </g>

        <ellipse cx="200" cy="282" rx="158" ry="16" fill="url(#basePlatform)" />
        <ellipse
          cx="200"
          cy="282"
          rx="126"
          ry="9"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
        />

        <g className={styles.boyBody}>
          <g className={styles.boyWaveArm}>
            <path
              d="M96 176 C74 162, 62 140, 68 118"
              fill="none"
              stroke="#196847"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <circle cx="68" cy="114" r="10" fill="#F4C29F" />
          </g>

          <path
            d="M168 178 C180 192, 176 212, 162 218"
            fill="none"
            stroke="#196847"
            strokeWidth="17"
            strokeLinecap="round"
          />

          <path
            d="M96 172 C96 158, 170 158, 170 172 L176 266 L90 266 Z"
            fill="url(#sweaterGreen)"
          />
          <polygon points="121,161 133,178 145,161" fill="#FFFFFF" />
          <polygon points="130,173 136,173 138,204 133,210 128,204" fill="#D9622B" />

          <circle cx="152" cy="186" r="6" fill="url(#goldAccent)" />

          <rect
            x="136"
            y="204"
            width="38"
            height="46"
            rx="5"
            transform="rotate(-8 136 204)"
            fill="#D9622B"
          />
          <rect
            x="140"
            y="208"
            width="30"
            height="38"
            rx="3"
            transform="rotate(-8 140 208)"
            fill="#FAFBF9"
          />

          <rect x="125" y="144" width="16" height="18" rx="7" fill="#E8B08A" />
          <circle cx="133" cy="116" r="34" fill="#F4C29F" />

          <path
            d="M99 114 C97 84, 122 72, 146 76 C164 80, 170 96, 167 112 C160 98, 145 94, 128 96 C113 98, 104 104, 99 114 Z"
            fill="#1E2421"
          />

          <circle cx="122" cy="116" r="3.4" fill="#18221D" />
          <circle cx="144" cy="116" r="3.4" fill="#18221D" />
          <circle cx="123" cy="115" r="1.1" fill="#FFFFFF" />
          <circle cx="145" cy="115" r="1.1" fill="#FFFFFF" />
          <ellipse cx="115" cy="124" rx="4.5" ry="2.5" fill="#E5988B" opacity="0.55" />
          <ellipse cx="151" cy="124" rx="4.5" ry="2.5" fill="#E5988B" opacity="0.55" />
          <path
            d="M124 127 Q133 136 142 127"
            fill="none"
            stroke="#18221D"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </g>

        <g className={styles.girlBody}>
          <circle cx="232" cy="104" r="15" fill="#231F20" />
          <circle cx="298" cy="104" r="15" fill="#231F20" />
          <circle cx="236" cy="96" r="4.5" fill="#F5C84C" />
          <circle cx="294" cy="96" r="4.5" fill="#F5C84C" />

          <g className={styles.girlWaveArm}>
            <path
              d="M304 178 C326 164, 338 142, 332 120"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="17"
              strokeLinecap="round"
            />
            <circle cx="332" cy="116" r="9.5" fill="#F6C8A8" />
          </g>

          <path
            d="M232 178 C220 196, 224 216, 236 224"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <circle cx="237" cy="226" r="8.5" fill="#F6C8A8" />

          <path
            d="M232 172 C232 158, 300 158, 300 172 L308 266 L224 266 Z"
            fill="#FFFFFF"
          />
          <path
            d="M242 164 L252 164 L254 196 L278 196 L280 164 L290 164 L305 266 L227 266 Z"
            fill="url(#sweaterGreen)"
          />
          <rect x="234" y="212" width="64" height="6" rx="3" fill="url(#goldAccent)" />

          <rect x="258" y="145" width="15" height="17" rx="7" fill="#E9B592" />
          <circle cx="265" cy="118" r="33" fill="#F6C8A8" />

          <path
            d="M232 116 C232 86, 256 78, 265 78 C276 78, 298 86, 298 116 C290 100, 276 96, 265 98 C252 96, 240 100, 232 116 Z"
            fill="#231F20"
          />

          <circle cx="254" cy="118" r="3.4" fill="#18221D" />
          <circle cx="276" cy="118" r="3.4" fill="#18221D" />
          <circle cx="255" cy="117" r="1.1" fill="#FFFFFF" />
          <circle cx="277" cy="117" r="1.1" fill="#FFFFFF" />
          <ellipse cx="247" cy="126" rx="4.5" ry="2.5" fill="#E5988B" opacity="0.55" />
          <ellipse cx="283" cy="126" rx="4.5" ry="2.5" fill="#E5988B" opacity="0.55" />
          <path
            d="M256 129 Q265 138 274 129"
            fill="none"
            stroke="#18221D"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}