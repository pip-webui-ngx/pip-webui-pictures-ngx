import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipPictureListEditModule } from 'pip-webui-pictures-ngx';

import { PictureListEditExampleComponent } from './picture-list-edit-example.component';

@NgModule({
  imports: [CommonModule, PipPictureListEditModule],
  declarations: [PictureListEditExampleComponent],
})
export class PictureListEditExampleModule {}
