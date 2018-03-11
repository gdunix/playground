import * as React from 'react';
import Input from '../../components/Input/';
import { connect } from 'react-redux';

import {
  ConnectedInputProps,
  MapDTP,
  MapSTP
} from './types';

const InputWithLabel: React.SFC<ConnectedInputProps> = ({
  id,
  onChange = (f: any) => f,
  ...rest
}) => {
  return (
    <React.Fragment>
      <label>{id}</label>
      <Input {...rest} onChange={onChange(id)} />
    </React.Fragment>
  );
};

const mapStateToProps: MapSTP = (state: any, props: any) => {
  return {
    value: state.inputReducer[props.id] || ''
  };
};

const mapDispatchToProps: MapDTP = (dispatch) => {
  const onChange = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'INPUT_ONCHANGE',
      payload: {
        value: e.target.value,
        id
      }
    });
  };

  return {
    onChange
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputWithLabel);
