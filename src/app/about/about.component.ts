import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // climate:any
  // constructor(private enterdata:MyserviceService){
  //   this.getproData() 
  // }
  // getproData(){
  //   this.enterdata.proData().subscribe(res=>{
  //     this.climate=res
  //   })

  // }

}
