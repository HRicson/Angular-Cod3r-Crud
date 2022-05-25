import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProductService } from './../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  product: Product

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.productService.readById(id).subscribe(product => this.product = product)
  }

  delete() {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService
        .showMessage(`Produto '${this.product.name}' excluído com sucesso!`)
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
