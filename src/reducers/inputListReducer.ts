const initialState: any = {
  counter: 0,
  list: []
};

export default function(
  state: any = initialState,
  action: any
) {
  switch (action.type) {
    case 'APPEND_INPUT':
      const counter = state.counter + 1;
      return {
        list: [
          ...state.list,
          {id: counter}
        ],
        counter
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
        list: [],
        counter: 0
      };
    default:
      return state;
  }
}