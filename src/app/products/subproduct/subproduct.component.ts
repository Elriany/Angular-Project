import { Component, OnInit,ViewChild } from '@angular/core';
import { Http } from '@angular/http';
declare var $;
@Component({
  selector: 'app-subproduct',
  templateUrl: './subproduct.component.html',
  styleUrls: ['./subproduct.component.css']
})
export class SubproductComponent implements OnInit {
  //My Array 
  Products = [];
  constructor(private http:Http) {  // Dependency Injection
    //get Method that Featch Data From Url  
    this.http.get('https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json')
    .subscribe(
      response =>{ 
        //Fill My Products Array with Json Data From URl 
        this.Products = response.json().ProductCollection;        
      },
      error=>{console.log("success");}
    )
  }
  //default image when load component this image i make it with paint.
  selectedProductImage="../../../assets/img.png";
  d(subproduct){
    //console.log(subproduct.ProductPicUrl);    
    this.selectedProductImage = subproduct.ProductPicUrl;
  }
  // I Can't using jQuery DataTable For Searching And Pagination But i Failing
  @ViewChild('dataTable') table;
  dataTable: any;
    ngOnInit(): void {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable();
    }
  
  //Data For Testing Firistly
  // Products = [
  //   {
  //     product:"prod1",
  //     Category:"cat1",
  //     mainCategory:"maincat",
  //     taxTarif:2345,
  //     supplierName:"ali hassan",
  //     productImage:"https://www.eyecatchingdesign.co.uk/wp-content/uploads/2014/05/eye-catching-design-epl-10.jpg"
  //   },
  //   {
  //     product:"prod1",
  //     Category:"cat1",
  //     mainCategory:"maincat",
  //     taxTarif:2345,
  //     supplierName:"ali hassan",
  //     productImage:"https://www.eyecatchingdesign.co.uk/wp-content/uploads/2014/05/eye-catching-design-epl-10.jpg"
  //   }
  // ]
}
