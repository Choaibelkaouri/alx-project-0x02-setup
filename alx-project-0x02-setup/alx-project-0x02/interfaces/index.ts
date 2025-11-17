export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
}

export interface UserProps {
  name: string;
  email: string;
  address: UserAddress;
}
