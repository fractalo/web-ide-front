/*
// LoginIcon 컴포넌트
export const LoginIcon = props => (
  <svg
    width="28px"
    height="28px"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g fill="#ffffff">
      <path d="M10.5 1.674V4c1.215.912 2 2.364 2 4 0 2.762-2.238 5-5 5s-5-2.238-5-5c0-1.636.785-3.088 2-4V1.674C2.135 2.797.5 5.208.5 8c0 3.866 3.134 7 7 7s7-3.134 7-7c0-2.792-1.635-5.203-3.5-6.326Z" />
      <path d="M8.5 7.003V.997C8.5.446 8.056 0 7.5 0c-.553 0-1 .453-1 .997v6.006c0 .551.444.997 1 .997.553 0 1-.453 1-.997Z" />
    </g>
  </svg>
); */

// EmailIcon 컴포넌트
export const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    width="27px"
    height="27px"
    viewBox="0 0 612 612"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <g id="_x37__2_">
        <g fill="#ffffff">
          <path d="M535.5,76.5h-459C34.253,76.5,0,110.753,0,153v306c0,42.247,34.253,76.5,76.5,76.5h459c42.247,0,76.5-34.253,76.5-76.5 V153C612,110.753,577.747,76.5,535.5,76.5z M554.625,114.75L306,306L57.375,114.75H554.625z M38.25,459V153l172.125,133.875 L40.067,470.055C38.996,466.535,38.25,462.883,38.25,459z M67.989,496.236L240.592,312.33L306,361.749l62.596-49.744 l175.415,184.212C541.257,496.849,70.743,496.849,67.989,496.236z M571.934,470.073L401.625,286.875L573.75,153v306 C573.75,462.883,573.004,466.535,571.934,470.073z" />
        </g>
      </g>
    </g>
  </svg>
);

// PasswordIcon 컴포넌트
export const PasswordIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    width="27px"
    height="27px"
    viewBox="0 0 26 26"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path
        d="M21.1 25H5C3.3 25 1.89999 23.6 1.89999 21.9V13C1.89999 11.3 3.3 9.90002 5 9.90002H21.1C22.8 9.90002 24.2 11.3 24.2 13V21.9C24.2 23.6 22.8 25 21.1 25Z"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M16.6 9.79999H9.29999C8.69999 9.79999 8.10001 9.30001 8.10001 8.60001V5.5C8.10001 3 10.1 1 12.6 1H13.2C15.7 1 17.7 3 17.7 5.5V8.60001C17.8 9.30001 17.3 9.79999 16.6 9.79999Z"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M13 21C12.1 21 11.4 20.3 11.4 19.4V15.4C11.4 14.5 12.1 13.8 13 13.8C13.9 13.8 14.6 14.5 14.6 15.4V19.4C14.6 20.3 13.9 21 13 21Z"
        fill="#ffffff"
      />
    </g>
  </svg>
);
