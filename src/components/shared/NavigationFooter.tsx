import Link from "next/link";

import { Dispatch, MouseEvent } from "react";

type NavigationFooterProps =
  | {
      isLink: true;
      href: string;
      label: string;
      onClick?: never;
    }
  | {
      isLink?: false;
      href: never;
      label: string;
      onClick: Dispatch<MouseEvent>;
    };

const NavigationFooter = ({
  label,
  href,
  isLink = false,
  onClick,
}: NavigationFooterProps) => {
  const buttonStyleClasses =
    "rounded-lg bg-indigo-700 px-6 py-4 text-sm font-bold text-white transition-all hover:brightness-90";

  return (
    <footer className="fixed bottom-0 left-0 right-0 mx-auto flex items-center justify-end border-t-2 border-t-gray-100 bg-white px-6 py-4">
      {isLink ? (
        <Link href={href} className={buttonStyleClasses}>
          {label}
        </Link>
      ) : (
        <button className={buttonStyleClasses} onClick={onClick}>
          {label}
        </button>
      )}
    </footer>
  );
};

export { NavigationFooter };
