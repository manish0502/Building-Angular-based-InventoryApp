import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IProduct } from '../models/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  product$:Observable<IProduct>;
  product:Observable<any>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService:ProductService) { }

  ngOnInit() {

    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
          this.productService.getProductById(Number.parseInt(params.get('id')))
        ));
    }

    editProduct(product):void{
      
      this.product$.subscribe(product =>{
        console.log('edit clicked');
        this.router.navigate(['products/edit/'+product.id]);
      });
  }
}