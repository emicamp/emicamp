import { Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';



export enum SIZE {S, M, L, XL};
export enum ColorEnum {'Light pink', 'Olive green', 'Grey', 'Brown'}
export type Order = {
  name: string;
  size: SIZE;
  color: ColorEnum;
}
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  animal: string = '';
  name: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderFormDialog, {
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.animal = result;
    });
  }

  saveOrder(order: Order) {

  }
}

@Component({
  selector: 'order-form',
  templateUrl: './order-form-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelectModule,
    CommonModule
  ],
})
export class OrderFormDialog {
  public colors = ['white', 'pink', 'olive green', 'grey'];
  public sizes = ['small', 'medium', 'large', 'extra large']
  constructor(
    public dialogRef: MatDialogRef<OrderFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Order,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}