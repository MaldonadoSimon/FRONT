import {Component} from '@angular/core';
import {UserService} from '../../../../core/auth/services/user/user.service';
import {IUser} from '../../../../core/auth/services/user/model/IUser';
import {CarouselDataEntry} from '../../models/carousel-data-entry';
import {CarouselUi} from 'isapre-digital/models/carousel.model';
import {BeneficiarySelected} from 'isapre-digital/models/beneficiary.model';
import {AvatarService} from '../../services/avatar.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  user: IUser;
  carouselUi: CarouselUi = {familyGroup: true};
  carouselData = [];
  beneficiarySelected: BeneficiarySelected;

  constructor(
    private userService: UserService,
    private avatarService: AvatarService,
  ) {
    this.user = this.userService.getUser();
    this.carouselData = this.setCarouselData(this.user);
  }

  private setCarouselData(user: IUser): CarouselDataEntry[] {
    const dataCarousel = new Array<CarouselDataEntry>();
    const data = new CarouselDataEntry();
    user.beneficiarios.forEach(
      (b) => {
        data.name = `${b.nombres} ${b.apellidoPaterno} ${b.apellidoMaterno}`;
        data.rut = b.rut.toString(10);
        data.dv = b.dv;
        dataCarousel.push(data);
      }
    );
    this.avatarService.getAvatar(user.rut)
      .then((avatarBase64) => {
        dataCarousel.forEach(b => b.avatar = avatarBase64);
      });
    return dataCarousel;
  }

  public selected(event): void {
    this.beneficiarySelected = event;
  }

}
