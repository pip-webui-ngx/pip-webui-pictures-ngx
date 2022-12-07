import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { PipPictureModule } from 'pip-webui-pictures-ngx';
import { PictureExampleComponent } from './picture-example.component';

@NgModule({
  imports: [CommonModule, MatCardModule, TranslocoTestingModule, PipPictureModule],
  declarations: [PictureExampleComponent],
})
export class PictureExampleModule {}
