import * as UserActions from './../actions/user.actions';

const initialState: Array<any> = [];

export function reducer(state, action: UserActions.Actions) {
  switch (action.type) {
    case UserActions.ADD_USER:
      return [...state, action.payload];
    case UserActions.LOAD_USER:
      return [...action.payload];
    case UserActions.REMOVE_USER:
      state.splice(action.payload, 1);
      return state;
    case UserActions.UPDATE_USER:
      let index;
      state.forEach((user, i) => {
        if(user['id'] == action.payload['id']) {
          index = i;
        }
      });
      state.splice(index, 1, action.payload);
      return state;

    default:
      return state;
  }

}
