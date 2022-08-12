//using string, number and boolean types

type Greet = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: Greet) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Hello {props.name}. You have {props.messageCount}
        </h2>
      ) : (
        <h2>Hello, welcome guest.</h2>
      )}
    </div>
  );
};
