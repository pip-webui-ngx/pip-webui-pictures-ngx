import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { PipPictureEditComponent } from '../picture-edit/picture-edit.component';

@Component({
  selector: 'pip-picture-list-edit',
  templateUrl: 'picture-list-edit.component.html',
  styleUrls: ['./picture-list-edit.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ width: '0', opacity: '0' }),
        animate('.35s ease', style({ width: '80px', opacity: '1' })),
      ]),
      transition(':leave', [
        style({ width: '80px', opacity: '1', 'margin-right': '8px' }),
        animate('.35s ease', style({ width: '0', opacity: '0', 'margin-right': '0' })),
      ]),
    ]),
  ],
})
export class PipPictureListEditComponent {
  public imageSources: string[] = [];

  @Input() set srcs(sources: string[]) {
    this.imageSources = sources;
  }

  @Input() width: number | string = '80px';
  @Input() height: number | string = '80px';
  @Input() defaultIcon: string = null;
  @Input() defaultAddIcon = 'add';
  @ViewChild(PipPictureEditComponent) private _editComponent: PipPictureEditComponent;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onUpdateImages: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.pip-picture-list-edit') klass = true;

  onImageLoad(event): void {
    this.imageSources.push(event.url);
    this._editComponent.removeImage();
    this.updateImagesCallback();
  }

  onDeleteClick(index): void {
    this.removeImageByIndex(index);
  }

  onDeletePress(event): void {
    this.removeImageByIndex(event.index);
  }

  private removeImageByIndex(index: number) {
    if (index > -1 && index < this.imageSources.length) {
      this.imageSources.splice(index, 1);
      this.updateImagesCallback();
    }
  }

  private updateImagesCallback() {
    if (this.onUpdateImages) {
      this.onUpdateImages.emit(this.imageSources);
    }
  }
}
