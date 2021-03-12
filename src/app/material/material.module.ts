import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'

const materialComponents = [
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
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
