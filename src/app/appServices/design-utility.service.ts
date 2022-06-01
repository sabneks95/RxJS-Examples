import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(val: any, containerID: string){
    let el=document.createElement('li');
    el.innerHTML=val;
    document.getElementById(containerID)?.appendChild(el);
  }
 
}
