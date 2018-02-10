import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule],
})

export class MaterialModule { }