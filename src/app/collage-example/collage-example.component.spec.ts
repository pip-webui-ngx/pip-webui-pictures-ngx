import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { PipCollageModule } from 'pip-webui-pictures-ngx';
import { CollageExampleComponent } from './collage-example.component';

describe('CollageExampleComponent', () => {
  let component: CollageExampleComponent;
  let fixture: ComponentFixture<CollageExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollageExampleComponent],
      imports: [CommonModule, TranslocoTestingModule, PipCollageModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
