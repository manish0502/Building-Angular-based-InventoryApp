import { Lookup } from './../models/lookup';
import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders ,HttpParams}   from '@angular/common/http'
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LookupService {

private units: Array<Lookup>=[

  {name: 'PCS', code:'1' , category:1},
  {name: 'Carton', code:'2' , category:1},
  {name: 'grams', code:'3' , category:1},
  {name: 'Ltr', code:'4' , category:1},
  {name: 'KG', code:'5' , category:1}

];

private productCategories: Array<Lookup>=[

  {name: 'Pickles', code:'1' , category:1},
  {name: 'Rice', code:'2' , category:1},
  {name: 'oil', code:'3' , category:1},
  {name: 'Masala', code:'4' , category:1},
  {name: 'Ghee', code:'5' , category:1}

  
]

  constructor(private httpclient: HttpClient) { }

 // @Get all productCategories
 getproductCategories():Observable<Lookup[]>{
  return of(this.productCategories);

}

// @Get all Units
getUnits():Observable<Lookup[]>{
  return of(this.units);

}

}
