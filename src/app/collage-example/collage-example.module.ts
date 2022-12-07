import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { PipCollageModule } from 'pip-webui-pictures-ngx';
import { CollageExampleComponent } from './collage-example.component';

@NgModule({
  imports: [CommonModule, TranslocoModule, PipCollageModule],
  declarations: [CollageExampleComponent],
})
export class CollageExampleModule {}
