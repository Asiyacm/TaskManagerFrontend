import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-set',
  templateUrl: './task-set.component.html',
  styleUrls: ['./task-set.component.css']
})
export class TaskSetComponent {

  router: any;
  search = ''

  id: any;
  tableData:any = [];
  selectedData:any = [];
  constructor(private api: ApiService, private route: Router) {
    this.tableData = this.data;

    api.viewEventUnitFacilities().subscribe(
      (response: any) => {
        this.eventUnitFacilities = response
        console.log(this.eventUnitFacilities)
      }

    )


//taskset
    api.viewTask().subscribe(
      (response: any) => {
        this.tasks = response
        console.log(this.tasks)
      }

    )



  }

  //taskset
  tasks: any = []

    eventUnitFacilities: any = []
  

  

updateData = ()=>{
  console.log(this.search);
  this.tableData = this.data.filter((value:any)=>value['name'].toLowerCase().startsWith(this.search.toLocaleLowerCase()));
  console.log(this.tableData)
}

updateSelection = (id:number)=>{
  console.log(this.tableData)
  this.tableData.map((value:any)=>{
    if(value.id==id){
      if(this.selectedData.includes(value)){
        this.selectedData = this.selectedData.filter((data:any)=>data!=value)
      }else{
        this.selectedData.push(value);
      }
      
    }
  })
  console.log(this.selectedData);
  
}

  deletebuttonclick = () => {

    let tasks: any = {

      "id": this.id

    }

    this.api.deleteTask(this.id).subscribe(

      (response: any) => {

        console.log(this.id)

        if (response.status == "success") {




          window.location.reload();




        }

      }

    )
  }




  changeId = (id: any) => {

    this.id = id;

  }



  data = [

    { id: 1, name: "Ss1"},
    { id: 2, name: "Ss2" },
    { id: 3, name: "Ss3"},
    { id: 4, name: "Ss4"}
  ]



}

