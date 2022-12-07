import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { PipPictureListEditModule } from 'pip-webui-pictures-ngx';
import { PictureListEditExampleComponent } from './picture-list-edit-example.component';

describe('PictureListEditExampleComponent', () => {
  let component: PictureListEditExampleComponent;
  let fixture: ComponentFixture<PictureListEditExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureListEditExampleComponent],
      imports: [NoopAnimationsModule, CommonModule, TranslocoTestingModule, PipPictureListEditModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureListEditExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
