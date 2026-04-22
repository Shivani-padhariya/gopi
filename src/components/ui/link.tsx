import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Link({ href, ...props }: LinkProps) {
  return <RouterLink to={href} {...props} />;
}

