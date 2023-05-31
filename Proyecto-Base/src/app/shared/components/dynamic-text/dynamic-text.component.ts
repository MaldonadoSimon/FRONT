import {Component, Input, OnInit} from '@angular/core';
import {IText} from 'src/app/shared/components/dynamic-text/model/text.model';
import {DynamicTextService} from './dynamic-text.service';

@Component({
  selector: 'app-dynamic-text',
  templateUrl: './dynamic-text.component.html',
  styleUrls: ['./dynamic-text.component.scss']
})
export class DynamicTextComponent implements OnInit {

  text: IText;
  @Input() section: string;
  @Input() name: string;

  constructor(
    private dynamicTextService: DynamicTextService,
  ) {
  }

  async ngOnInit(): Promise<void> {
      this.text = await this.dynamicTextService.getText(this.section, this.name);
  }

}
