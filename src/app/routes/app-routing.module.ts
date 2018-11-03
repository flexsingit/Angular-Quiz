import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routesList, RouteComponents} from './routeList';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

/*
Angular Flex Layout API using Flexbox CSS + mediaQuery.
https://github.com/angular/flex-layout
*/
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {
  MatSortModule,
  MatTableModule,
} from '@angular/material';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const importModules = [
  MatButtonModule,
  MatSortModule,
  MatTableModule,
  MatCardModule,
  CommonModule,
  FlexLayoutModule,
  MatDialogModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatIconModule];

@NgModule({
  declarations: [ RouteComponents ],
  imports: [
    RouterModule.forRoot(routesList),
    importModules
    ],
  exports: [
    importModules,
    RouterModule
  ]
})
export class AppRoutingModule { }
