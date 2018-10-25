import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  static get ACCESS_TOKEN (): any {
    // return `Basic ${localStorage.getItem('access_token')}`;
    return `Basic YWRtaW46YWRtaW4=`;

  }

  static get REFRESH_TOKEN (): any {
    return localStorage.getItem('refresh');
  }

  constructor () {
  }

  public loginUser (loginData: any) {

  }

  public logoutUser (): void {
    localStorage.clear();
  }

}
