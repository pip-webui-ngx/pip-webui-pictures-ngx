import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { WebcamModule } from 'ngx-webcam';
import { PipCameraDialogComponent } from './camera-dialog.component';

@NgModule({
  declarations: [PipCameraDialogComponent],
  exports: [PipCameraDialogComponent],
  imports: [CommonModule, FlexModule, MatButtonModule, MatIconModule, MatDialogModule, WebcamModule, TranslocoModule],
  providers: [],
})
export class PipCameraDialogModule {}
