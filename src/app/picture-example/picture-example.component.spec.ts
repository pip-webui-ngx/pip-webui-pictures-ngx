import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { PipPictureModule } from 'pip-webui-pictures-ngx';
import { PictureExampleComponent } from './picture-example.component';

describe('PictureExampleComponent', () => {
  let component: PictureExampleComponent;
  let fixture: ComponentFixture<PictureExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureExampleComponent],
      imports: [CommonModule, MatCardModule, TranslocoTestingModule, PipPictureModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
