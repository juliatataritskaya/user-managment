import { Action } from '@ngrx/store';
import { User } from './../models/user.model';
import * as UserActions from './../actions/user.actions';

const initialState: Array<any> = [];

export function reducer(state, action: UserActions.Actions) {
  switch(action.type) {
    // case UserActions.ADD_USER:
    //   return [...state, action.payload];
    case UserActions.LOAD_USER:
      return [...action.payload];
    case UserActions.REMOVE_USER:
      console.log(state, action.payload,);
      // state.splice(action.payload, 1);
      return state;
    // case TutorialActions.UPDATE_USER:
    //   console.log(state);
    //   // state.splice(action.payload.index, 1, action.payload.data);
    //   return state;

    default:
      return state;
  }

}
