import {Component, OnInit} from '@angular/core';
import {LoadFileData, LoadFileUi, ProcessControl} from 'isapre-digital/models/load-file.model';

@Component({
  selector: 'app-load-files',
  templateUrl: './load-files.component.html',
  styleUrls: ['./load-files.component.scss']
})
export class LoadFilesComponent implements OnInit {

  loadFileUi: LoadFileUi = {
    multiple: true,
    filesExtend: true,
    filesUpload: 3,
    controlProcess: true,
    maxSize: 5,
  };

  controlProcess: ProcessControl = {
    name: 'archivo',
    loading: false,
    completed: false
  };

  filesUploadedFromDataBase: LoadFileData;


  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }

  public getLoadFileData(event): void {
    console.log(event);
  }

}
