import { Name } from "./Person.types";

//using array of object type

// type PersonsListProps = {
//   names: {
//     first: string;
//     last: string;
//   }[];
// };

//imported type from other type
type PersonsListProps = {
  names: Name[];
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
