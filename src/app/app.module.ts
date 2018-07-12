import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';
import {RootComponent} from './root/root.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainContainerComponent} from './main-container/main-container.component';
import {HomepageComponent} from './homepage/homepage.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FilmsComponent} from './films/films.component';
import {FilmsSingleComponent} from './films-single/films-single.component';
import {DataBearerService} from './data-bearer.service';
import {RegistrationComponent} from './registration/registration.component';
import { NewFilmComponent } from './new-film/new-film.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptor} from './http-interceptor';
import {AuthGuardService} from './auth-guard.service';
const appRoutes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'films',
        component: FilmsComponent
    },
    {
        path: 'film/create',
        component: NewFilmComponent
    },
    {
        path: 'user/registration',
        component: RegistrationComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'film/:slug',
        component: FilmsSingleComponent
    },
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        RootComponent,
        HeaderComponent,
        FooterComponent,
        MainContainerComponent,
        HomepageComponent,
        PageNotFoundComponent,
        FilmsComponent,
        FilmsSingleComponent,
        RegistrationComponent,
        NewFilmComponent,
        CommentComponent,
        CommentListComponent,
        LoginComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false

            }
        ),
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        DataBearerService,
        AuthGuardService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
