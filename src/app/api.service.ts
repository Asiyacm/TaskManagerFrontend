import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
 
 //taskset
  viewTask=()=>
  {
    return this.http.get("http://localhost:8080/gettaskSetList");
  }

  deleteTask=(id: any)=>
  {
    return this.http.delete("http://localhost:8080/delete/"+id);
  }

  viewEvent=()=>
  {
    return this.http.get("http://localhost:8080/viewEventUnitFacility");
  }

  viewEventUnitFacilities=()=>
  {
    return this.http.get("http://localhost:8080/viewEventUnitFacility");
  }
  

 
  

 

}
