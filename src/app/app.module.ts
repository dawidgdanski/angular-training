import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ZippyComponent} from './zippy/zippy.component';
import {LikeComponent} from './like/like.component';
import {ExampleFormComponent} from './example-form/example-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PasswordChangeComponent} from './password-change/password-change.component';
import {NewCourseFormComponent} from './new-course-form/new-course-form.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: 'zippy', component: ZippyComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    LikeComponent,
    ExampleFormComponent,
    PasswordChangeComponent,
    NewCourseFormComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
