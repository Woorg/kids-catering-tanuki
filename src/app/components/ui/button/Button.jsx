import Link from "next/link";

const Button = (children, ...props) => {
  return <Link {...props}>{children}</Link>;
};

export default Button;
