import { Component, EventEmitter, HostBinding, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { Subject, takeUntil } from 'rxjs';
import { PipCameraDialogComponent } from '../camera-dialog/camera-dialog.component';
import { PipPictureUrlDialogComponent } from '../picture-url-dialog/picture-url-dialog.component';

export type PipAddImageSource = 'camera' | 'link' | 'file';

@Component({
  selector: 'pip-add-image',
  templateUrl: 'add-image.component.html',
  styleUrls: ['./add-image.component.scss'],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'pip-webui-pictures-ngx' }],
})
export class PipAddImageComponent implements OnDestroy {
  #destroyed$ = new Subject<void>();

  @ViewChild(MatMenuTrigger) public menu: MatMenuTrigger;
  @ViewChild('fileInput') fileInput: any;

  @Input() sources: PipAddImageSource[] = ['camera', 'link', 'file'];

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onImageLoad: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.pip-add-image') klass = true;

  constructor(private dialog: MatDialog) {}

  ngOnDestroy(): void {
    this.#destroyed$.next();
    this.#destroyed$.complete();
  }

  onCameraClick(): void {
    const dialogRef = this.dialog.open(PipCameraDialogComponent, {
      data: { img: null },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.#destroyed$))
      .subscribe((result) => {
        if (this.onImageLoad) {
          this.onImageLoad.emit(result);
        }
      });
  }

  onPictureUrlClick(): void {
    const dialogRef = this.dialog.open(PipPictureUrlDialogComponent, {
      data: { img: null },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.#destroyed$))
      .subscribe((result) => {
        if (this.onImageLoad) {
          this.onImageLoad.emit(result);
        }
      });
  }

  onUploadClick(e, fileInput: HTMLInputElement): void {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onloadend = (result: any) => {
      if (this.onImageLoad) {
        this.onImageLoad.emit({
          img: {
            url: result.target.result,
            name: file.name,
            file,
          },
        });
      }
      this.fileInput.nativeElement.value = '';
    };
    reader.readAsDataURL(file);
  }
}
