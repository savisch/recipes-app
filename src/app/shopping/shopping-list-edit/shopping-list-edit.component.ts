import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css',
})
export class ShoppingListEditComponent implements AfterViewInit {
  // @Output() newItem = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  amountEl: HTMLInputElement;
  nameEl: HTMLInputElement;
  isAddDisabled: boolean = true;
  isClearDisabled: boolean = true;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {}

  addItem(name: string, amount: number) {
    // console.log(`Name:${name} Amount: ${amount}`);
    let item = {
      name: name,
      amount: amount,
    };
    // this.newItem.emit(item);
    this.shoppingService.onAddItem(item);
    this.resetForm();
    this.isAddDisabled = true;
    this.isClearDisabled = true;
  }

  resetForm() {
    this.nameEl.value = '';
    this.amountEl.value = '0';
  }

  onChange() {
    if (this.amountEl.value !== '0' && this.nameEl.value !== '') {
      this.isAddDisabled = false;
      this.isClearDisabled = false;
    }
  }

  clearItem() {
    this.resetForm();
    this.isAddDisabled = true;
    this.isClearDisabled = true;
  }

  ngAfterViewInit() {
    this.nameEl = this.nameInput.nativeElement;
    this.amountEl = this.amountInput.nativeElement;
  }
}
