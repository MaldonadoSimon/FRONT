import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../core/auth/services/user/user.service';
import {IUser} from '../../../../core/auth/services/user/model/IUser';

@Component({
  selector: 'app-validate-contac',
  templateUrl: './validate-contac.component.html',
  styleUrls: ['./validate-contac.component.scss']
})
export class ValidateContacComponent implements OnInit {

  user: IUser;

  validateContactInfoUi: object = {
    enablePhoneField: true,
  };

  validateContactInfoDataEntry: { email: string, phone: string } = {
    email: 'string',
    phone: 'string',
  };

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    if (this.user) {
      this.validateContactInfoDataEntry.email = this.user.email;
      this.validateContactInfoDataEntry.phone = this.user.telefono.toString(10);
    }
  }

}
