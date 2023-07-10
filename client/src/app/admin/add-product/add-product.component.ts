import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IBrand } from 'src/app/shared/models/brand';
import { IPrdocutType } from 'src/app/shared/models/product_type';
import { AdminShopService } from '../services/admin-shop.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  brands: IBrand[];
  types: IPrdocutType[];
  dataToSend: FormData = new FormData();
  addNewProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    productType: new FormControl(null, [Validators.required]),
    productBrand: new FormControl(null, [Validators.required]),
  });

  constructor(
    private adminShopService: AdminShopService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getTypes();
  }

  getBrands(): void {
    this.adminShopService.getBrands().subscribe(
      (response: IBrand[]) => {
        this.brands = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTypes(): void {
    this.adminShopService.getTypes().subscribe({
      next: (types) => {
        this.types = types;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit(): void {
    this.dataToSend.append('name', this.addNewProductForm.value.name);
    this.dataToSend.append(
      'description',
      this.addNewProductForm.value.description
    );
    this.dataToSend.append(
      'price',
      this.addNewProductForm.value.price
    );
    this.dataToSend.append(
      'productType',
      this.addNewProductForm.value.productType
    );
    this.dataToSend.append(
      'productBrand',
      this.addNewProductForm.value.productBrand
    );

    this.adminShopService.addNewProduct(this.dataToSend).subscribe({
      next: () => {
        this.toastr.success('Product is succesugully added!');
        this.addNewProductForm.reset();
      },
      error: (error) => {
        this.toastr.error(error.message, 'Something went wrong!');
      },
    });
  }

  onFileSelected(event) {
    if (event.target.files[0]) {
      this.dataToSend.append('image', event.target.files[0]);
      this.dataToSend.append('imageName', event.target.files[0].name);
    }
  }
}
