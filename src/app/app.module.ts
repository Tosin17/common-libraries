import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconInputModule } from './lib/icon-input.module';
import { TabComponent } from './lib/tab/tab.component';
import { TabPanelComponent } from './lib/tab-panel/tab-panel.component';
import { ModalModule } from './lib/modal/modal.module';
import { InputMaskModule } from './lib/masked-input/masked-input.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, TabPanelComponent, TabComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconInputModule,
    ModalModule,
    InputMaskModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
