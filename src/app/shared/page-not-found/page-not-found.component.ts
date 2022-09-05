import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('simple', [
      transition(
        ':enter',
        animate('1s', style({ transform: 'translateX(300%)', opacity: '0' }))
      ),
    ]),
  ],
})
export class PageNotFoundComponent implements OnInit {
  show: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.show = !this.show;
    }, 1000);
  }
}
