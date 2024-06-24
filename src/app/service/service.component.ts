import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  happy:any
  refresh={
    sno:5,
    name:"pranay",
    role:"director",
    salary:500000,
    id:5
    

  }
// constructor(private gotdata:MyserviceService){
//   this.gotdata.givingData().subscribe(res=>{
// this.happy=res
//   })
//   this.gotdata.postData(this.refresh).subscribe(res=>{})
// }
}
