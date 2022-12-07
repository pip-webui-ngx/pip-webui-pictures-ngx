import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipPictureEditModule, PipAddImageModule } from 'pip-webui-pictures-ngx';

import { PictureEditExampleComponent } from './picture-edit-example.component';

@NgModule({
  imports: [CommonModule, PipPictureEditModule, PipAddImageModule],
  declarations: [PictureEditExampleComponent],
})
export class PictureEditExampleModule {}
