import clsx from 'clsx';
import { currentTheme } from '@/app/lib/theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        `flex h-10 items-center rounded-lg ${currentTheme[2]} px-4 text-sm font-medium text-white transition-colors ${currentTheme[3]} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${currentTheme[4]} aria-disabled:cursor-not-allowed aria-disabled:opacity-50`,
        className,
      )}
    >
      {children}
    </button>
  );
}
