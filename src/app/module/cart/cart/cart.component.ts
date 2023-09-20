import { Component, OnInit, ViewChild, forwardRef, NgModule } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormGroup, Validators, FormControl, FormArray, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { OrdersService } from 'src/app/services/orders.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CoreService } from 'src/app/services/core.service';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { ConfirmOrderService } from '../confirm-order.service';


interface IProduct {
  name: string;
  image: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  id: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartProducts: any[];
  quantity = 0
  grosPrice = 0
  discount = 0
  deliveryCharges = 40
  totalAmount = 0
  dateAndTime = new Date
  randNumber = Math.floor(Math.random() * 10000);

  orderForm: FormGroup;

  constructor(
    private cartService: CartService,
    private orderService: OrdersService,
    private snackBarService: CoreService,
    private confirmService: ConfirmOrderService
  ) { }

  ngOnInit(): void {
    this.addProducts()
    this.createFormGroup()
    this.setOrderFormValues()
    this.totalQuantity()
  }

  addProducts() {
    this.cartProducts = this.cartService.getItems
  }

  createFormGroup() {
    this.orderForm = new FormGroup({
      orderNumber: new FormControl(this.randNumber),
      orderDate: new FormControl(this.dateAndTime),
      totalAmount: new FormControl(0),
      orderStatus: new FormControl('New Order'),
      address: new FormGroup({
        addressLine: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(60)]),
        city: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(6), Validators.maxLength(12)]),
        state: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(6), Validators.maxLength(12)]),
        country: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(16)]),
        pinCode: new FormControl(null, [Validators.required])
      }),
      orderProduct: new FormArray([])
    })
  }

  setOrderFormValues() {
    if (!this.cartProducts.length) return
    this.cartProducts.forEach((product) => {
      this.orderedProducts.push(this.addFormGroup(product))
    })
    this.setQuantity()
  }

  get orderedProducts() {
    return this.orderForm.controls['orderProduct'] as FormArray
  }


  addFormGroup(product: IProduct) {
    const formConfig = new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      discription: new FormControl(product.description),
      discount: new FormControl(product.discount),
      category: new FormControl(product.category),
      price: new FormControl(product.price),
      image: new FormControl(product.image),
      quantity: new FormControl(1, [Validators.min(1), Validators.max(25)])
    })
    return formConfig
  }


  getProductFromProductsArray(idx: any) {
    return this.orderForm.get(['orderProduct', idx]) as FormGroup
  }

  getControl(idx, name) {
    return this.getProductFromProductsArray(idx).get(name)
  }

  updateQnty(type: string, id: number, controlName: string) {
    const currentValue = this.getControl(id, controlName).value
    if (type === 'add') {
      this.getProductFromProductsArray(id).get(controlName).patchValue(currentValue + 1)

    } else {
      this.getProductFromProductsArray(id).get(controlName).patchValue(currentValue - 1)

    }

  }

  deleteProduct(idx: number) {
    this.orderedProducts.removeAt(idx)
    this.snackBarService.openSnackBar('Removed From Your Cart', 'Ok')
    this.cartService.removeCartItme(idx)
  }

  totalQuantity() {
    this.orderedProducts.valueChanges.subscribe((val) => {
      this.quantity = 0
      this.grosPrice = 0
      this.discount = 0
      val.forEach((qun) => {
        this.quantity += qun?.quantity
        this.grosPrice += qun?.quantity * qun?.price
        this.discount += qun?.quantity * ((qun?.discount / 100) * qun?.price)
        this.calculationOfTotalAmount()
      })
    })
  }

  setQuantity() {
    const products = this.orderForm.get('orderProduct') as FormArray
    products.controls.forEach((element) => {
      this.quantity += element.get('quantity').value
      this.grosPrice += element.get('quantity').value * element.get('price').value
      this.discount += element.get('quantity').value * ((element.get('discount').value / 100) * element.get('price').value)
      this.calculationOfTotalAmount()
    });
  }

  calculationOfTotalAmount() {
    this.totalAmount = this.grosPrice + this.deliveryCharges - this.discount
    this.orderForm.get('totalAmount').patchValue(this.totalAmount)
  }


  placeOrder() {
    if (this.orderForm.valid) {
      const cancelConfirm = this.confirmService.opneModel("Place Order", "Would you like to place order?")
      cancelConfirm.afterClosed().subscribe((res) => {
        if (res) {
          this.orderService.addorders(this.orderForm.value).subscribe({
            next: (val: any) => {
              this.snackBarService.openSnackBar('Order Placed Successfully', 'Ok')
              this.cartService.clearCart()
              this.cartProducts = []
              // console.log(val)
            },
            error: (err: any) => {
              console.log(err)
            }
          })
        }
      })
    }
  }
}
