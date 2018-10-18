import { Action } from '@ngrx/store';
import { User, UserUpdate } from './../models/user.model';


export const REMOVE_USER    = '[USER] Remove';
export const LOAD_USER    = '[USER] Load';
export const ADD_USER       = '[USER] Add';
export const UPDATE_USER    = '[USER] Update';


export class LoadUser implements Action {
  readonly type = LOAD_USER;

  constructor(public payload: User[]) {}
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;

  constructor(public payload: number) {}
}

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) {}
}

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;

  constructor(public payload: UserUpdate) {}
}

export type Actions = LoadUser | RemoveUser | AddUser | UpdateUser;
