import { Component } from '@angular/core';
import { UploadService } from './upload.service';
import { Upload } from './upload';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload-form',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class UploadFormComponent {
  currentUpload: Upload;
  dropzoneActive = false;
  constructor(private upSvc: UploadService) { }
  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }
  handleDrop(fileList: FileList) {
    const filesIndex = _.range(fileList.length);
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(fileList[idx]);
      this.upSvc.pushUpload(this.currentUpload); }
    );
  }
}
