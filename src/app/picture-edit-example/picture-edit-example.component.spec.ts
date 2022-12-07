import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { PipAddImageModule, PipPictureEditModule } from 'pip-webui-pictures-ngx';
import { PictureEditExampleComponent } from './picture-edit-example.component';

describe('PictureEditExampleComponent', () => {
  let component: PictureEditExampleComponent;
  let fixture: ComponentFixture<PictureEditExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureEditExampleComponent],
      imports: [CommonModule, TranslocoTestingModule, PipPictureEditModule, PipAddImageModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureEditExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
