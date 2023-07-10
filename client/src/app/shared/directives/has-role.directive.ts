import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { take } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { IUser } from '../models/user';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {
@Input() appHasRole: string[] = [];
  user: IUser = {} as IUser;

  
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private accountService: AccountService
  ) {
    accountService.currentUser$.pipe(take(1)).subscribe({
      next: (user) => {
        if (user) this.user = user;
      },
    });
  }


  ngOnInit(): void {
    if (this.user.roles.some((r) => this.appHasRole.includes(r))) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
