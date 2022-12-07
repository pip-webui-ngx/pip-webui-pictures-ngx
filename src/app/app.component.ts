import { Component, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslocoService } from '@ngneat/transloco';
import { PipThemesService, Theme } from 'pip-webui-themes-ngx';
import { combineLatest, map, Observable } from 'rxjs';
import { ExmapleListItem } from './examples-list/shared/ExampleListItem';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ctx$: Observable<{
    currentTheme: Theme;
    themes: Theme[];
  }>;
  public themes: Theme[];
  public theme: Theme;
  public url: string;

  list: ExmapleListItem[] = [
    {
      name: 'Collage',
      id: 'collage',
      route: 'collage',
    },
    {
      name: 'Picture',
      id: 'picture',
      route: 'picture',
    },
    {
      name: 'Picture Edit',
      id: 'picture_edit',
      route: 'picture_edit',
    },
    {
      name: 'Picture List Edit',
      id: 'picture_list_edit',
      route: 'picture_list_edit',
    },
  ];
  @ViewChild('sidenav') sidenav: MatSidenav;

  public constructor(
    private pipThemes: PipThemesService,
    public mainService: MainService,
    public media: MediaObserver,
    public translate: TranslocoService,
  ) {
    this.pipThemes.selectTheme(this.pipThemes.config.defaultThemeName).then();
    this.mainService.breadcrumbs = [{ title: 'title' }];
    this.ctx$ = combineLatest({
      currentTheme: this.pipThemes.currentTheme$,
      themes: this.pipThemes.themes$.pipe(map((themes) => Array.from(themes.values()))),
    });
  }

  changeTheme(theme: Theme) {
    this.pipThemes.selectTheme(theme.name).then();
  }
}
