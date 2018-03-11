import * as React from 'react';

export type ReactInputAttributes = React.InputHTMLAttributes<HTMLInputElement>;
export type DetailedInputProps = React.DetailedHTMLProps<ReactInputAttributes, HTMLInputElement>;

const Input: React.SFC<DetailedInputProps> = (props) => (
  <input type="text" {...props} />
);

export default Input;
