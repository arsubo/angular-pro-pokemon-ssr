import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'page-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact page');
    this.meta.updateTag({
      name: 'descripcion',
      content: 'esta es mi contact page',
    });
    this.meta.updateTag({
      name: 'og:title',
      content: 'Contact page',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Hola,Curso,Angular,Arnoldo,Suarez,PRO',
    });
  }
}
