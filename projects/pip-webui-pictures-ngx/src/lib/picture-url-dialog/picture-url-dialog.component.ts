import { Component, Inject, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

@Component({
  selector: 'pip-picture-url-dialog',
  templateUrl: 'picture-url-dialog.component.html',
  styleUrls: ['./picture-url-dialog.component.scss'],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'pip-webui-pictures-ngx' }],
})
export class PipPictureUrlDialogComponent implements AfterViewInit {
  public imageLink: string = null;
  public imageLoaded = false;
  private dataUrl: any = null;

  constructor(
    public dialogRef: MatDialogRef<PipPictureUrlDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private renderer: Renderer2,
    private elRef: ElementRef,
  ) {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.elRef.nativeElement.parentElement, 'padding', '24px 0');
  }

  onImageLoad(): void {
    this.dataUrl = this.imageLink;
    this.imageLoaded = true;
  }

  onImageError(): void {
    this.dataUrl = null;
    this.imageLoaded = false;
  }

  onSave(): void {
    this.data.img = { url: this.dataUrl };
    this.dialogRef.close(this.data);
  }

  onClose(): void {
    this.data.img = null;
    this.dialogRef.close();
  }
}
