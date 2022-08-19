//using React.ComponentProps to add shape to the ButtonProps
//props now can be variant,children and function onClick used mostly by button element

//limitting this custom button to have string children only
//Omit is used
type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
