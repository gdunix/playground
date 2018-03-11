import * as React from 'react';
import {
  MapDispatchToProps,
  MapStateToProps
} from 'react-redux';

export type OnChangeAction = {
  type: string;
  payload:  {
    id: string;
    value: string;
  };
};

export interface InputActions {
  onChange: (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputStoreProps {
  id: string;
  value: string;
}

export type MapDTP = MapDispatchToProps<{}, InputActions>;
export type MapSTP = MapStateToProps<{}, {}, {}>;

export type InputAttributes = React.InputHTMLAttributes<HTMLInputElement>;
export type DetailedInputProps = React.DetailedHTMLProps<InputAttributes, HTMLInputElement>;
export type ConnectedInputProps = DetailedInputProps & Partial<InputActions> & Partial<InputStoreProps>;
