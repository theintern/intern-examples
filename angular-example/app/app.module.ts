import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LocalStorageService, LocalStorageServiceKey } from './services/localStorage';
import { TodoService } from './services/store';
import { TodoApp } from './app';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [ TodoApp ],
	providers: [
		{ provide: LocalStorageServiceKey, useValue: 'angular-todos' },
		LocalStorageService,
		TodoService
	],
	bootstrap: [ TodoApp ]
})
export class AppModule { }
