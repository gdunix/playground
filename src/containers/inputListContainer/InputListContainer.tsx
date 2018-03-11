import * as React from 'react';
import { connect } from 'react-redux';
import InputWithLabelContainer from '../inputContainer';

const InputList = ({list, removeInput}: any) => {
  const inputs = list.map(
    ({id, value}: any, i: any) => (
      <div key={id}>
        <InputWithLabelContainer id={id} />
        <button onClick={() => removeInput(id)}>Remove</button>
      </div>
    )
  );
  return (
    <React.Fragment>
      {inputs}
    </React.Fragment>
  );
};

const AppendableInputList: any = ({
  appendInput,
  removeInput,
  removeAllInput,
  list
}: any) => (
  <React.Fragment>
    <button onClick={appendInput}>Add</button>
    <button onClick={removeAllInput}>Remove all</button>
    <InputList list={list} removeInput={removeInput}/>
  </React.Fragment>
);

const mapStateToProps: any = ({inputListReducer: reducer}: any, props: any) => {
  return {
    list: reducer.list
  };
};

const mapDispatchToProps: any = {
  appendInput() {
    return {
      type: 'APPEND_INPUT',
    };
  },
  removeInput(id: any) {
    return {
      type: 'REMOVE_INPUT',
      payload: {
        value: id
      }
    };
  },
  removeAllInput() {
    return {
      type: 'REMOVE_ALL_INPUT',
    };
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppendableInputList);
