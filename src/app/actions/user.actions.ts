import { Action } from '@ngrx/store';
import { User } from './../models/user.model';


export const REMOVE_USER    = '[USER] Remove';
export const LOAD_USER    = '[USER] Load';


export class LoadUser implements Action {
  readonly type = LOAD_USER;

  constructor(public payload: User[]) {}
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;

  constructor(public payload: number) {}
}


export type Actions = LoadUser | RemoveUser ;
