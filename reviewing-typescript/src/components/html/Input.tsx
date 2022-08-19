//using the React.ComponentProps<"input"> for the type to add shape to this wrapper component for input
//this Input Component can how handle props used mainly on input element
//you can now use this component as input element

type InputProps = React.ComponentProps<"input">;

export const Input = (props: InputProps) => {
  return <input {...props} />;
};
