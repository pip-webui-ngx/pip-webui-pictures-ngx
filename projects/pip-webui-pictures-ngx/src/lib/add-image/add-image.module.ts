import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslocoModule } from '@ngneat/transloco';
import { PipAddImageComponent } from './add-image.component';
import { PipCameraDialogModule } from '../camera-dialog/camera-dialog.module';
import { PipPictureUrlDialogModule } from '../picture-url-dialog/picture-url-dialog.module';

@NgModule({
  declarations: [PipAddImageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    PipCameraDialogModule,
    PipPictureUrlDialogModule,
    TranslocoModule,
  ],
  exports: [PipAddImageComponent],
  providers: [],
})
export class PipAddImageModule {}
