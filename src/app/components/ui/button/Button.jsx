"use client";

import clsx from "clsx";
import Link from "next/link";

const Button = ({ label, children, href, className }) => {
  return (
    <Link
      aria-label={label}
      href={href}
      className={clsx(className, "transition-all hover:opacity-90")}
    >
      {children}
    </Link>
  );
};

export default Button;
