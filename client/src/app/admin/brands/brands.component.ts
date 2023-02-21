import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IBrand } from 'src/app/shared/models/brand';
import { AdminShopService } from '../services/admin-shop.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  brands: IBrand[];

  addNewBrandForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private adminShopService: AdminShopService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getBrands();
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

  deleteBrand(id: number) {
    this.adminShopService.deleteBrand(id).subscribe({
      next: () => {
        this.brands = this.brands.filter((brand) => brand.id !== id);
        this.toastr.success('Brand is succesuflly deleted!');
      },
      error: (error) => {
        this.toastr.error(error.message, 'Something went wrong!');
      },
    });
  }

  onSubmit(): void {
    this.adminShopService.addNewBrand(this.addNewBrandForm.value).subscribe({
      next: (brand) => {
        this.brands.push(brand);
        this.toastr.success('Brand is succesugully added!');
        this.addNewBrandForm.reset();
      },
      error: (error) => {
        this.toastr.error(error.message, 'Something went wrong!');
      },
    });
  }
}
