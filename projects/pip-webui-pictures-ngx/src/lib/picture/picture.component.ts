import {
  Component,
  Input,
  Output,
  OnInit,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Renderer2,
  ElementRef,
  ChangeDetectorRef,
  ViewChild, HostBinding,
} from '@angular/core';
import { setImageMarginCSS, setErrorImageCSS, setErrorIconCSS, debounce } from '../shared/picture-utils';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'pip-picture',
  templateUrl: 'picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PipPictureComponent implements OnInit, OnDestroy, AfterViewInit {
  private _image: any;
  private _imageBlock: HTMLElement;
  private _loaded = false;
  private _defaultIconBlock: HTMLElement;
  private onResize: any;

  source: string = null;
  letter: string;

  @Input() resize = true;

  @Input() set src(source: string) {
    this.source = source;
  }

  @Input() defaultIcon = 'image';

  @Input() set letterIcon(letter: string) {
    this.letter = letter && letter.length ? letter.charAt(0) : null;
  }

  @Input() set backgroundColor(color: string) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', color);
  }

  @Input() set foregroundColor(color: string) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', color);
  }

  @Input() foregroundColorOpacity = '0.56';
  // tslint:disable-next-line:no-output-rename
  @Output('onImageLoad') imageLoadEvent: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-rename
  @Output('onImageError') imageErrorEvent: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.pip-picture') klass = true;

  @ViewChild('svgIcon') private svgIcon: MatIcon;
  @ViewChild('fontIcon') private fontIcon: MatIcon;

  constructor(private renderer: Renderer2, private elRef: ElementRef, private cd: ChangeDetectorRef) {
    this.onResize = debounce(() => {
      if (this._loaded) {
        setImageMarginCSS(this.elRef.nativeElement, this._image, {});
      } else if (!this.letter) {
        setErrorIconCSS(this.elRef.nativeElement, this.getCurrentIconElement(), {});
      }
    }, 20);
  }

  private getCurrentIconElement(): HTMLElement {
    return this.defaultIcon.includes('-')
      ? this.fontIcon._elementRef.nativeElement
      : this.svgIcon._elementRef.nativeElement;
  }

  ngOnInit(): void {
    this._imageBlock = this.elRef.nativeElement.querySelector('img');
    this._defaultIconBlock = this.elRef.nativeElement.querySelector('div');
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  ngAfterViewInit(): void {
    if (this.resize) {
      window.addEventListener('resize', this.onResize);
    }
  }

  onImageError($event): void {
    this._image = $event.path ? $event.path[0] : $event.target || null;

    setErrorImageCSS(this._image, {});
    if (!this.letter) {
      setErrorIconCSS(this.elRef.nativeElement, this.getCurrentIconElement(), {});
    }
    if (this._image) {
      this.renderer.setStyle(this._image, 'display', 'none');
    }
    this.renderer.setStyle(this._defaultIconBlock, 'display', 'flex');
    this._loaded = false;
    if (this.imageErrorEvent) {
      this.imageErrorEvent.emit({ event: $event, image: this._image });
    }
  }

  onImageLoad($event): void {
    this._image = $event.path ? $event.path[0] : $event.target || null;

    setImageMarginCSS(this.elRef.nativeElement, this._image, {});
    if (this._image) {
      this.renderer.setStyle(this._image, 'display', 'flex');
    }
    this.renderer.setStyle(this._defaultIconBlock, 'display', 'none');
    this._loaded = true;
    if (this.imageLoadEvent) {
      this.imageLoadEvent.emit({ event: $event, image: this._image });
    }
  }
}
