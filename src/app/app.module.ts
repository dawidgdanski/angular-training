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
import {NotFoundComponent} from './not-found/not-found.component';
import {ZippyDemoComponent} from './zippy-demo/zippy-demo.component';
import {LikeDemoComponent} from './like-demo/like-demo.component';
import {PasswordChangeDemoComponent} from './password-change-demo/password-change-demo.component';
import {ExampleFormDemoComponent} from './example-form-demo/example-form-demo.component';
import {NewCourseDemoComponent} from './new-course-demo/new-course-demo.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowingComponent } from './github-following/github-following.component';

const appRoutes: Routes = [
  {path: 'zippy', component: ZippyDemoComponent},
  {path: 'like', component: LikeDemoComponent},
  {path: 'password', component: PasswordChangeDemoComponent},
  {path: 'form', component: ExampleFormDemoComponent},
  {path: 'newcourse', component: NewCourseDemoComponent},
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
    NotFoundComponent,
    ZippyDemoComponent,
    LikeDemoComponent,
    PasswordChangeDemoComponent,
    ExampleFormDemoComponent,
    NewCourseDemoComponent,
    GithubFollowersComponent,
    GithubFollowingComponent
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
