import { Component } from '@angular/core';
import { ProductsServiceService } from './services/products-service.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products Display';
  dataList: any[];
  constructor(private _ProductsServiceService: ProductsServiceService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._ProductsServiceService.getData().subscribe((data) => {
      this.dataList = data;
      console.log(this.dataList);
    });
  }
}
