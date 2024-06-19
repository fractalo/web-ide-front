
//방 만들기 icon
export const RoomIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="24"
      height="24"
      fill="currentColor"
      {...props}
    >
      <rect x="16" y="2" width="32" height="60" rx="2" ry="2" stroke="currentColor" fill="none" />
      <circle cx="44" cy="32" r="2" fill="currentColor" />
    </svg>
  );

//언어 아이콘
export const LanguageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />
      <path d="M2 12h20M12 2c2.5 3 4 7 4 10s-1.5 7-4 10c-2.5-3-4-7-4-10s1.5-7 4-10z" stroke="currentColor" fill="none" />
    </svg>
  );
  
  export default LanguageIcon;