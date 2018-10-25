import {NgModule} from '@angular/core';
import {UserService} from './user.service';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [SharedModule],
  declarations: [],
  exports: [],
  providers: [UserService]
})
export class ServicesModule {
}
