import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatIconModule } from '@angular/material/icon'

const materialComponents = [
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    [materialComponents]
  ],
  exports: [
    [materialComponents]
  ]
})

export class MaterialModule { }
