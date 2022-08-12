//using React.ReactNode as type for children that are react component not text like the Heading component
type OscarProps = {
  children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
