//using array of object type

type PersonsListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonsListProps) => {
  return (
    <div>
      {props.names.map((name, index) => {
        return (
          <h2 key={name.first + index}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
