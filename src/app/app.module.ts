import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FileDropDirective } from './file-upload.directive';
import { UploadService } from './upload.service';
import { UploadFormComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    UploadFormComponent,
    FileDropDirective,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyB2ORRPPyByH_A9usUIn4it9eszgUglqkM',
      authDomain: 'file-upload-b9b20.firebaseapp.com',
      databaseURL: 'https://file-upload-b9b20.firebaseio.com',
      projectId: 'file-upload-b9b20',
      storageBucket: 'file-upload-b9b20.appspot.com',
      messagingSenderId: '1027666459473'
    }),
    AngularFireDatabaseModule
  ],
  providers: [UploadService],
  bootstrap: [UploadFormComponent]
})
export class AppModule { }
