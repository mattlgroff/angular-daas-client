import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule ,MatCheckboxModule, MatCardModule, MatFormFieldModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatToolbarModule],
})

export class MaterialModule { }