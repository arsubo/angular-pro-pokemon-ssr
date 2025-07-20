import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'page-about',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About page');
    this.meta.updateTag({
      name: 'descripcion',
      content: 'esta es mi about page',
    });
    this.meta.updateTag({
      name: 'og:title',
      content: 'About page',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Hola,Curso,Angular,Arnoldo,Suarez,PRO',
    });
  }
}
