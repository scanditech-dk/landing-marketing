import Link from "next/link";

export const LogoSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
 d="M17.451 0H5.383v3.62h9.145l3.114 3.285-3.114 3.284H5.383V3.62H0v16.76h5.383v-6.57h9.145l3.114 3.284-3.114 3.284H5.383V24H17.45L24 17.094 19.17 12 24 6.905z"        fill="currentColor"
      />
    </svg>
  );
};

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <LogoSVG />
      <span className="text-2xl font-medium">Notus</span>
    </Link>
  );
};
