import { async, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { mstThemes, PipThemesModule, pipWebUI2ThemesList } from 'pip-webui-themes-ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollageExampleModule } from './collage-example/collage-example.module';
import { ExamplesListModule } from './examples-list/examples-list.module';
import { PictureEditExampleModule } from './picture-edit-example/picture-edit-example.module';
import { PictureExampleModule } from './picture-example/picture-example.module';
import { PictureListEditExampleModule } from './picture-list-edit-example/picture-list-edit-example.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        NoopAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatSelectModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        PipThemesModule.forRoot({
          themes: [...pipWebUI2ThemesList, mstThemes['Elegant']],
        }),
        AppRoutingModule,
        ExamplesListModule,
        CollageExampleModule,
        PictureEditExampleModule,
        PictureExampleModule,
        PictureListEditExampleModule,
        TranslocoTestingModule,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
