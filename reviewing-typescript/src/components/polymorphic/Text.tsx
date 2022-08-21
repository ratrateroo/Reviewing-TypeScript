//polymorphic component
//returning a specific element e.g. h1, h2, or p. depending on the props passed to this component

//creating polymorphic compenent commonly used when creating personal design system, shaping component into different html elements based on props

import React from "react";

type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  //using React.ElementType for props as html element, the "as" props containing values as h1 or p for the Component constant
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};
