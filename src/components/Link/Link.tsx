import { FC, ReactNode } from "react";

export type LinkProps = {
  href: string;
  className?: string;
  children?: ReactNode;
};

export const Link: FC<LinkProps> = (props) => {
  const { children, className, href } = props;

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};
