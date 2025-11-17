export interface CardProps {
  title: string;
  content: string;
}

export type ButtonSize = "small" | "medium" | "large";
export type ButtonShape = "rounded-sm" | "rounded-md" | "rounded-full";

export interface ButtonProps {
  label: string;
  size?: ButtonSize;
  shape?: ButtonShape;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: UserAddress;
}

export interface UserProps {
  name: string;
  email: string;
  address: string;
}

export interface PostModalFormValues {
  title: string;
  content: string;
}
