import clsx from "clsx";

const Container = ({ className, children }) => {
  return <div className={clsx("container m-auto", className)}>{children}</div>;
};

export default Container;
