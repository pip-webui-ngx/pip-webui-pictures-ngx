import { Component, Inject, ElementRef, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { Subject, Observable } from 'rxjs';
import { WebcamUtil, WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'pip-camera-dialog',
  templateUrl: 'camera-dialog.component.html',
  styleUrls: ['./camera-dialog.component.scss'],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'pip-webui-pictures-ngx' }],
})
export class PipCameraDialogComponent implements OnInit, AfterViewInit {
  private trigger: Subject<void> = new Subject<void>();

  cameraError = false;
  options = {
    audio: false,
    video: true,
    width: 500,
    height: 375,
    cameraType: 'front',
  };
  showWebcam = true;
  webcamImage: WebcamImage = null;

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  constructor(
    public dialogRef: MatDialogRef<PipCameraDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private renderer: Renderer2,
    private elRef: ElementRef,
  ) {}

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs();
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement.parentElement, 'padding', '24px 0');
  }

  onSuccess(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  onError(): void {
    this.cameraError = true;
  }

  takeSnapshot(): void {
    if (this.showWebcam) {
      this.trigger.next();
      this.showWebcam = false;
    } else {
      this.webcamImage = null;
      this.showWebcam = true;
    }
  }

  onSave(): void {
    this.dialogRef.close({
      img: {
        base64: this.webcamImage.imageAsBase64,
        imgData: this.webcamImage.imageData,
        url: this.webcamImage.imageAsDataUrl,
        pos: 0,
      },
    });
  }

  onClose(): void {
    this.data.img = null;
    this.dialogRef.close();
  }
}
