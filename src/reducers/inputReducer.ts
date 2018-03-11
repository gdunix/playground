const initialState = {};

export default function(
  state: any = initialState,
  action: any
) {
  switch (action.type) {
    case 'INPUT_ONCHANGE':
      const {value, id} = action.payload;
      return {
        ...state,
        [id]: value
      };
    case 'REMOVE_ALL_INPUT':
      return {};
    default:
    return state;
  }
}
