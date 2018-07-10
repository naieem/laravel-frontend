import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
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
        path: 'user/registration',
        component: RegistrationComponent
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
        RegistrationComponent
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
    providers: [DataBearerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
