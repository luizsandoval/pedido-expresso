import Link from 'next/link';
import {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    PropsWithChildren,
} from 'react';

type PrimaryButtonProps = PropsWithChildren<
    | {
          isLink: true;
          href: string;
      }
    | ({
          isLink?: false;
          href?: never;
      } & DetailedHTMLProps<
          ButtonHTMLAttributes<HTMLButtonElement>,
          HTMLButtonElement
      >)
>;

const PrimaryButton = ({
    children,
    isLink,
    href,
    ...rest
}: PrimaryButtonProps) => {
    const buttonStyleClasses =
        'rounded-lg bg-indigo-700 px-6 py-4 text-sm font-bold text-white transition-all hover:brightness-90 disabled:bg-gray-400 disabled:text-gray-100 disabled:cursor-blocked';

    return isLink ? (
        <Link href={href} className={buttonStyleClasses}>
            {children}
        </Link>
    ) : (
        <button className={buttonStyleClasses} {...rest}>
            {children}
        </button>
    );
};

export { PrimaryButton };
