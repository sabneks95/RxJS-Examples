import { Component, OnInit } from '@angular/core';

import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obsMsg:any;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {

    //of

    const obs1= of('Anup', 'kiran', 'kumar');
    obs1.subscribe(res=>{
      console.log(res);
      this._designUtility.print(res, 'elContainer')
    })


    const obs2= of({a: 'Anup', b:'kiran', c:'kumar'});
    obs2.subscribe(res=>{
      this.obsMsg=res;
      console.log('obsMsg=> '+ res);
    
    })

    //From-Array
    const obs3= from(['kiran', 'Kiran', 'kumar']);
    obs3.subscribe(res=>{
      console.log(res);
      this._designUtility.print(res, 'elContainer3')
    })

    //From - Promise

    const promise = new Promise(resolve=>{
      setTimeout(()=>{
        resolve('Promise resolved')
      }, 3000);
    })

    const obs4= from(promise);
    obs4.subscribe(res=>{
      console.log(res);
      this._designUtility.print(res, 'elContainer4')
    })
   

    // From - String

    const obs5= from('from string example');
    obs5.subscribe(res=>{
      console.log('from string=>', res);
      this._designUtility.print(res, 'elContainer5')
    })


  }

}
