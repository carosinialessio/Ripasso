import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    TabMenuModule,
    SelectButtonModule,
    InputTextModule,
    FileUploadModule,
    CalendarModule,
    CardModule,
    TableModule,
    InputTextareaModule,
    MessageModule,
    MessagesModule,
    ToastModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    TabMenuModule,
    SelectButtonModule,
    InputTextModule,
    FileUploadModule,
    CalendarModule,
    CardModule,
    TableModule,
    InputTextareaModule,
    MessageModule,
    MessagesModule,
    ToastModule,

    ToolbarComponent,
  ],
  providers: [MessageService]
})
export class SharedModule { }
