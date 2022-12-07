import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { PipAddImageComponent, PipAddImageSource } from '../add-image/add-image.component';
import { addPasteListener, removePasteListener } from '../shared/picture-utils';

@Component({
  selector: 'pip-picture-edit',
  templateUrl: 'picture-edit.component.html',
  styleUrls: ['./picture-edit.component.scss'],
})
export class PipPictureEditComponent implements OnDestroy, AfterViewInit {
  private _pasteElement: any = null;

  imageSource: string = null;

  @Input() public defaultIcon: string = null;
  @Input() public letterIcon: string = null;
  @Input() public deleteIcon = 'clear';
  @Input() public sources: PipAddImageSource[] = ['camera', 'link', 'file'];

  @Input() set src(source: string) {
    this.imageSource = source;
  }

  // tslint:disable-next-line:no-output-rename
  @Output('onImageLoad') imageLoadEvent: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-rename
  @Output('onImageDelete') imageDeleteEvent: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.pip-picture-edit') klass = true;

  @ViewChild(PipAddImageComponent) addImage: PipAddImageComponent;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this._pasteElement = addPasteListener((event) => {
      this.imageSource = event.url;
      this.imageLoadEvent.emit(event);
    });

    this.renderer.listen(this.elRef.nativeElement, 'keypress', (event) => {
      if (event.keyCode === 32 || event.keyCode === 13) {
        this.addImage.menu.openMenu();
      }
    });
  }

  ngOnDestroy(): void {
    removePasteListener(this._pasteElement);
  }

  onImageLoad(results): void {
    if (!results || !results.img) {
      return;
    }
    this.imageSource = results.img.url;
    this.imageLoadEvent.emit(results.img);
  }

  onImageError(): void {
    this.imageSource = null;
  }

  onDeleteClick(event): void {
    event.cancelBubble = true;
    this.removeImage();
  }

  removeImage(): void {
    this.imageSource = null;
    this.imageDeleteEvent.emit();
  }
}
