import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IPrdocutType } from 'src/app/shared/models/product_type';
import { AdminShopService } from '../services/admin-shop.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent {
  types: IPrdocutType[];

  addNewTypeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private adminShopService: AdminShopService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes(): void {
    this.adminShopService.getTypes().subscribe(
      {
        next: (types) =>{
          this.types = types;
        },
        error:(error)=>{
          console.log(error)
        }
      }
     
    );
  }

  deleteType(id: number) {
    this.adminShopService.deleetType(id).subscribe({
      next: () => {
        this.types = this.types.filter((type) => type.id !== id);
        this.toastr.success('Type is succesuflly deleted!');
      },
      error: (error) => {
        this.toastr.error(error.message, 'Something went wrong!');
      },
    });
  }

  onSubmit(): void {
    this.adminShopService.addNewType(this.addNewTypeForm.value).subscribe({
      next: (type) => {
        this.types.push(type);
        this.toastr.success('Type is succesugully added!');
        this.addNewTypeForm.reset();
      },
      error: (error) => {
        this.toastr.error(error.message, 'Something went wrong!');
      },
    });
  }
}
