import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PipFocusedModule } from 'pip-webui-behaviors-ngx';
import { PipPictureEditModule } from '../picture-edit/picture-edit.module';
import { PipPictureModule } from '../picture/picture.module';
import { PipPictureListEditComponent } from './picture-list-edit.component';

@NgModule({
  declarations: [PipPictureListEditComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, PipFocusedModule, PipPictureModule, PipPictureEditModule],
  exports: [PipPictureListEditComponent],
  providers: [],
})
export class PipPictureListEditModule {}
