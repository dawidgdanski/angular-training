import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ZippyComponent} from './zippy/zippy.component';
import {LikeComponent} from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
