"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[776],{6776:(B,S,a)=>{a.r(S),a.d(S,{ShopModule:()=>d});var p=a(6895),Z=a(4466),f=a(9838);class T{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6}}var t=a(1571),y=a(529),v=a(9646),b=a(4004),A=a(2340);class c{constructor(n){this.http=n,this.baseUrl=A.N.apiUrl,this.products=[],this.brands=[],this.types=[],this.shopParams=new T,this.productCache=new Map}getProducts(n=!0){if(n||(this.productCache=new Map),this.productCache.size>0&&n&&this.productCache.has(Object.values(this.shopParams).join("-"))&&(this.paginatioin=this.productCache.get(Object.values(this.shopParams).join("-")),this.paginatioin))return(0,v.of)(this.paginatioin);let e=new y.LE;return 0!==this.shopParams.brandId&&(e=e.append("brandId",this.shopParams.brandId.toString())),0!==this.shopParams.typeId&&(e=e.append("typeId",this.shopParams.typeId.toString())),this.shopParams.search&&(e=e.append("search",this.shopParams.search)),e=e.append("sort",this.shopParams.sort),e=e.append("pageIndex",this.shopParams.pageNumber.toString()),e=e.append("pageSize",this.shopParams.pageSize.toString()),this.http.get(this.baseUrl+"products",{observe:"response",params:e}).pipe((0,b.U)(s=>(this.productCache.set(Object.values(this.shopParams).join("-"),s.body),this.paginatioin=s.body,s.body)))}setShopParams(n){this.shopParams=n}getShopParams(){return this.shopParams}getBrands(){return this.brands.length>0?(0,v.of)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe((0,b.U)(n=>this.brands=n))}getTypes(){return this.types.length>0?(0,v.of)(this.types):this.http.get(this.baseUrl+"products/types").pipe((0,b.U)(n=>this.types=n))}getProduct(n){const e=[...this.productCache.values()].reduce((s,i)=>({...s,...i.data.find(r=>r.id===n)}),{});return 0!==Object.keys(e).length?(0,v.of)(e):this.http.get(this.baseUrl+"products/"+n)}}function N(o,n){if(1&o&&(t.TgZ(0,"span"),t._uU(1," Showing "),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._uU(4," of "),t.TgZ(5,"strong"),t._uU(6),t.qZA(),t._uU(7," results "),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.AsE(" ",(e.pageNumber-1)*e.pageSize+1," - ",e.pageNumber*e.pageSize>e.totalCount?e.totalCount:e.pageNumber*e.pageSize," "),t.xp6(3),t.hij(" ",e.totalCount," ")}}function k(o,n){1&o&&(t.TgZ(0,"span"),t._uU(1," There are "),t.TgZ(2,"strong"),t._uU(3,"0"),t.qZA(),t._uU(4," result for this filter. "),t.qZA())}c.\u0275fac=function(n){return new(n||c)(t.LFG(y.eN))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});class l{}l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:3,vars:2,consts:[[4,"ngIf"]],template:function(n,e){1&n&&(t.TgZ(0,"header"),t.YNc(1,N,8,3,"span",0),t.YNc(2,k,5,0,"span",0),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",e.totalCount&&e.totalCount>0),t.xp6(1),t.Q6J("ngIf",0===e.totalCount))},dependencies:[p.O5]});var O=a(6939),C=a(433);class h{constructor(){this.pageChanged=new t.vpe}onPageChanged(n){this.pageChanged.emit(n)}}h.\u0275fac=function(n){return new(n||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:4,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","ngModel","itemsPerPage","pageChanged"]],template:function(n,e){1&n&&(t.TgZ(0,"pagination",0),t.NdJ("pageChanged",function(i){return e.onPageChanged(i)}),t.qZA()),2&n&&t.Q6J("boundaryLinks",!0)("totalItems",e.totalCount)("ngModel",e.pageNumber)("itemsPerPage",e.pageSize)},dependencies:[O.Qt,C.JJ,C.On]});var x=a(8607);class g{constructor(n){this.basketService=n}ngOnInit(){}addItemToBasket(){this.basketService.addItemToBasket(this.product)}}g.\u0275fac=function(n){return new(n||g)(t.Y36(x.v))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-product-item"]],inputs:{product:"product"},decls:15,vars:8,consts:[[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-info",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],["type","button",1,"btn","btn-primary","mr-2",3,"click"],[1,"fa","fa-shopping-cart"],["type","button",1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],[3,"routerLink"],[1,"text-uppercase"],[1,"mb-2"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3)(4,"button",4),t.NdJ("click",function(){return e.addItemToBasket()}),t._UZ(5,"i",5),t.qZA(),t.TgZ(6,"button",6),t._uU(7," View "),t.qZA()()(),t.TgZ(8,"div",7)(9,"a",8)(10,"h6",9),t._uU(11),t.qZA()(),t.TgZ(12,"span",10),t._uU(13),t.ALo(14,"currency"),t.qZA()()()),2&n&&(t.xp6(2),t.Q6J("src",e.product.pictureUrl,t.LSH)("alt",e.product.name),t.xp6(4),t.MGl("routerLink","/shop/",e.product.id,""),t.xp6(3),t.MGl("routerLink","/shop/",e.product.id,""),t.xp6(2),t.Oqu(e.product.name),t.xp6(2),t.Oqu(t.lcZ(14,6,e.product.price)))},dependencies:[f.rH,p.H9],styles:[".btn[_ngcontent-%COMP%]{width:30%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(255,255,255,.5);opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translate(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translate(20px)}"]});const U=["search"];function w(o,n){if(1&o&&(t.TgZ(0,"option",16),t._uU(1),t.qZA()),2&o){const e=n.$implicit,s=t.oxw(2);t.Q6J("value",e.value)("selected",s.shopParams.sort===e.value),t.xp6(1),t.hij(" ",e.name," ")}}function I(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"li",17),t.NdJ("click",function(){const r=t.CHM(e).$implicit,P=t.oxw(2);return t.KtG(P.onBrandSelected(r.id))}),t._uU(1),t.qZA()}if(2&o){const e=n.$implicit,s=t.oxw(2);t.ekj("active",e.id===s.shopParams.brandId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function M(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"li",17),t.NdJ("click",function(){const r=t.CHM(e).$implicit,P=t.oxw(2);return t.KtG(P.onTypeSelected(r.id))}),t._uU(1),t.qZA()}if(2&o){const e=n.$implicit,s=t.oxw(2);t.ekj("active",e.id===s.shopParams.typeId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function q(o,n){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"h5",10),t._uU(2,"Sort"),t.qZA(),t.TgZ(3,"select",11),t.NdJ("change",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.onSortSelected(i.target.value))}),t.YNc(4,w,2,3,"option",12),t.qZA(),t.TgZ(5,"h5",13),t._uU(6,"Brands"),t.qZA(),t.TgZ(7,"ul",14),t.YNc(8,I,2,4,"li",15),t.qZA(),t.TgZ(9,"h5",13),t._uU(10,"Types"),t.qZA(),t.TgZ(11,"ul",14),t.YNc(12,M,2,4,"li",15),t.qZA(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.sortOptions),t.xp6(4),t.Q6J("ngForOf",e.brands),t.xp6(4),t.Q6J("ngForOf",e.types)}}function J(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",18)(1,"input",19,20),t.NdJ("keyup.enter",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onSearch())}),t.qZA(),t.TgZ(3,"button",21),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onSearch())}),t._uU(4," Search "),t.qZA(),t.TgZ(5,"button",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onReset())}),t._uU(6," Reset "),t.qZA()()}}function z(o,n){if(1&o&&(t.TgZ(0,"div",23),t._UZ(1,"app-product-item",24),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.Q6J("product",e)}}function F(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",25)(1,"app-pager",26),t.NdJ("pageChanged",function(i){t.CHM(e);const r=t.oxw();return t.KtG(r.onPageChanged(i))}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("pageNumber",e.shopParams.pageNumber)("totalCount",e.totalCount)("pageSize",e.shopParams.pageSize)}}class m{constructor(n){this.shopService=n,this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to High",value:"priceAsc"},{name:"Price: High to Low",value:"priceDesc"}],this.shopParams=n.getShopParams()}ngOnInit(){this.getProducts(),this.getBrands(),this.getTypes()}getProducts(){this.shopService.getProducts().subscribe(n=>{this.products=n.data,this.totalCount=n.count},n=>{console.log(n)})}getBrands(){this.shopService.getBrands().subscribe(n=>{this.brands=[{id:0,name:"All"},...n]},n=>{console.log(n)})}getTypes(){this.shopService.getTypes().subscribe({next:n=>{this.types=[{id:0,name:"All"},...n]},error:n=>{console.log(n)}})}onBrandSelected(n){const e=this.shopService.getShopParams();e.brandId=n,e.pageNumber=1,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onTypeSelected(n){const e=this.shopService.getShopParams();e.typeId=n,e.pageNumber=1,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onSortSelected(n){const e=this.shopService.getShopParams();e.sort=n,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onPageChanged(n){const e=this.shopService.getShopParams();e.pageNumber!==n.page&&(e.pageNumber=n.page,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts())}onSearch(){const n=this.shopService.getShopParams();n.search=this.searchTerm.nativeElement.value,n.pageNumber=1,this.shopService.setShopParams(n),this.shopParams=n,this.getProducts()}onReset(){this.searchTerm.nativeElement.value=void 0;const n=new T;this.shopService.setShopParams(n),this.shopParams=n,this.getProducts()}}m.\u0275fac=function(n){return new(n||m)(t.Y36(c))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-shop"]],viewQuery:function(n,e){if(1&n&&t.Gf(U,5),2&n){let s;t.iGM(s=t.CRH())&&(e.searchTerm=s.first)}},decls:11,vars:7,consts:[[1,"container","mt-3"],[1,"row"],[1,"col-3"],[4,"ngIf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"pageNumber","pageSize","totalCount"],["class","form-inline mt-2",4,"ngIf"],["class","col-4 mb-4",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[1,"text-warning","ml-3","mt-4","mb-2"],[1,"custom-select","mb-3",3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],[1,"text-warning","ml-3"],[1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[3,"value","selected"],[1,"list-group-item",3,"value","click"],[1,"form-inline","mt-2"],["type","text","placeholder","Search",1,"form-control","mr-2",2,"width","300px",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","my-2",3,"click"],[1,"btn","btn-outline-success","ml-2","my-2",3,"click"],[1,"col-4","mb-4"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"pageNumber","totalCount","pageSize","pageChanged"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2),t.YNc(3,q,13,3,"ng-container",3),t.qZA(),t.TgZ(4,"section",4)(5,"div",5),t._UZ(6,"app-paging-header",6),t.YNc(7,J,7,0,"div",7),t.qZA(),t.TgZ(8,"div",1),t.YNc(9,z,2,1,"div",8),t.qZA(),t.YNc(10,F,2,3,"div",9),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("ngIf",e.types&&e.brands),t.xp6(3),t.Q6J("pageNumber",e.shopParams.pageNumber)("pageSize",e.shopParams.pageSize)("totalCount",e.totalCount),t.xp6(1),t.Q6J("ngIf",e.products),t.xp6(2),t.Q6J("ngForOf",e.products),t.xp6(1),t.Q6J("ngIf",e.totalCount&&e.totalCount>0))},dependencies:[p.sg,p.O5,l,h,C.YN,C.Kr,g],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.2rem}.list-group-item.active[_ngcontent-%COMP%]{border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:#e95420b3;border-radius:10px}"]});var H=a(8909);function Q(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",3)(4,"h3"),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"div",6)(10,"i",7),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.decrement())}),t.qZA(),t.TgZ(11,"span",8),t._uU(12),t.qZA(),t.TgZ(13,"i",9),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.increment())}),t.qZA(),t.TgZ(14,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.addItemToBasket())}),t._uU(15," Add To Cart "),t.qZA()()(),t.TgZ(16,"div",11)(17,"div",12)(18,"h4"),t._uU(19,"Descripion"),t.qZA(),t.TgZ(20,"p"),t._uU(21),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("src",e.product.pictureUrl,t.LSH)("alt",e.product.name),t.xp6(3),t.Oqu(e.product.name),t.xp6(2),t.Oqu(t.lcZ(8,6,e.product.price)),t.xp6(5),t.hij(" ",e.quantity," "),t.xp6(9),t.Oqu(e.product.description)}}class _{constructor(n,e,s,i){this.shopService=n,this.activatedRoute=e,this.bcService=s,this.basketService=i,this.quantity=1,s.set("@productDetails","")}ngOnInit(){this.loadProduct()}addItemToBasket(){this.basketService.addItemToBasket(this.product,this.quantity)}increment(){this.quantity++}decrement(){this.quantity>1&&this.quantity--}loadProduct(){this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get("id")).subscribe({next:n=>{this.product=n,this.bcService.set("@productDetails",n.name)},error:n=>{console.log(n)}})}}_.\u0275fac=function(n){return new(n||_)(t.Y36(c),t.Y36(f.gz),t.Y36(H.pm),t.Y36(x.v))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"img-fluid","w-100",3,"src","alt"],[2,"font-size","2rem"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","mr-2",2,"cursor","pointer","font-size","2rem",3,"click"],[1,"font-weight-bold",2,"font-size","1.5rem"],[1,"fa","fa-plus-circle","text-warning","mx-2",2,"cursor","pointer","font-size","2rem",3,"click"],[1,"btn","btn-outline","btn-outline-secondary","btn-lg","ml-4",3,"click"],[1,"row","mt-5"],[1,"col-12","ml-3"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.YNc(1,Q,22,8,"div",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",e.product))},dependencies:[p.O5,p.H9]});const j=[{path:"",component:m},{path:":id",component:_,data:{breadcrumb:{alias:"productDetails"}}}];class u{}u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[p.ez,f.Bz.forChild(j),f.Bz]});class d{}d.\u0275fac=function(n){return new(n||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[p.ez,Z.m,u]})}}]);