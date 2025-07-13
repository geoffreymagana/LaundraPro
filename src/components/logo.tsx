import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn('text-2xl font-bold text-primary', className)}>
      LaundraPro
    </div>
  );
};

export default Logo;
