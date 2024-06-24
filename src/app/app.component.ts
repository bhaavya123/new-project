import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  city="Hyderabad,Delhi"
  pk="pawan kalyan"
  joy="true"
  now="false";
house="true";
inputvalue="apple"
name="bhaavya"
color="black"
gender="male"
title="software engineer"
DOB="30/6/99"
firstname="hai"
secondname="goodmorning"
image='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg'


// email="Email Address"
// password="Password"
// isdisabled=false;


// sendmethod(joy:any){
//   // console.log("keyup is working");
//  console.log(joy.value)


cname="special spread  good"

counter:number =0;
ahello(){
  this.name="pranay";
}


increment(){
  this.counter+=1;
}

decrement(){
  this.counter-=1;
}
handledoubleclick(){
  console.log('double click on occured');
}

hello="1+1";
sendmethod(){
  
}
path:string="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg";
d:string = new Date().toLocaleDateString();



clickonme(hello:any,hel:any){
 alert(hello.value+hel.value) 
 
}
onChange(hai:any){
  alert(hai.value)

}
onmouseover(event:any){
console.log("mouse was hover",event)
}
onmouseout(event:any){
console.log("mouse out",event)
}
toy(nice:any){
  console.log(nice.value)

}
goal(){
  alert("nice page")
}
ishidden=false;
index=true;
// path=''
courseId="123;"
isdisabled=true;
abc=false;
}



