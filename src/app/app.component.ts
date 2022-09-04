import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'personal-project-angular';

  constructor(private translateService: TranslateService) {}

  useKa() {
    this.translateService.use('ka');
  }

  useEn() {
    this.translateService.use('en');
  }

  get isKa() {
    return this.isLanguage('ka');
  }

  get isEn() {
    return this.isLanguage('en');
  }

  private isLanguage(lang: string): boolean {
    const defLang = this.translateService.defaultLang;
    const currLang = this.translateService.currentLang;

    return currLang ? currLang == lang : defLang == lang;
  }
}
