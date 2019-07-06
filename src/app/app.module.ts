import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ZippyComponent} from './zippy/zippy.component';
import {LikeComponent} from './like/like.component';
import { ExampleFormComponent } from './example-form/example-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    LikeComponent,
    ExampleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
