import { GamesService } from './services/games.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';;
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaginationService } from './services/pagination.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    PaginationService,
    GamesService
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
