import {Component} from '@angular/core';
import {Rows} from 'isapre-digital/models/tablelist.model';

@Component({
  selector: 'app-category-document',
  templateUrl: './category-document.component.html',
  styleUrls: ['./category-document.component.scss']
})
export class CategoryDocumentComponent {

  rows: Rows[] = [
    {
      item: 'item',
      qty: 2,
      namelink: 'namelink'
    }
  ];
  colhead: string[] = ['uno', 'dos', 'tres'];
  wait: boolean;
  download: string;

  constructor() {
    // This is intentional
  }

  public down(event): void {
    this.download = event;
  }

}
