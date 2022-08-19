//using type what the prop can be, array of string or number
// type ListProps = {
//     items: string[] | number[];
//     onClick: (value: string | number) => void;
//   };

//[1] use generics to type any kind of props ung the T
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

//[2]extend empty object, the least restriction when passing props
//generic type can be restricted using <T extends string | number>

//[a] <T extends { id: number }> - strict type checking
//prop can be object type with id:nubmer property
export const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          //[3] to use item.id as key, use [a]
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}
          </div>
        );
      })}
    </div>
  );
};
