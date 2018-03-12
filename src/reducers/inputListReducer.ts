import { getNextId } from '../utils/helpers';

const initialState: any = {
  list: []
};

export default function(
  state: any = initialState,
  action: any
) {
  switch (action.type) {
    case 'APPEND_INPUT':
      return {
        list: [
          ...state.list,
          {id: getNextId()}
        ]
      };
    case 'REMOVE_INPUT':
      return {
        ...state,
        list: state.list.filter(
          (i: any) => i.id !== action.payload.value
        )
      };
    case 'REMOVE_ALL_INPUT':
      return {
        list: []
      };
    default:
      return state;
  }
}
