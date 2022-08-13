//using string, number and boolean types
//using optional type with ? on messageCount, props can be available or not
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  // destructured messageCount and added default value
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Hello {props.name}. You have {messageCount}
        </h2>
      ) : (
        <h2>Hello, welcome guest.</h2>
      )}
    </div>
  );
};
