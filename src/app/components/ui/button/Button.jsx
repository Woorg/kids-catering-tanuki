"use client";

import Link from "next/link";

const Button = ({ children, href, className }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default Button;
