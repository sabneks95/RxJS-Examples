import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg:string='';
  videoSubscribtion: Subscription = new Subscription;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
   // const broadcast= interval(1000);
   // timer (delay, interval)

   const broadcast = timer(3000, 1000);

   this.videoSubscribtion = broadcast.subscribe(res=>{
      console.log(res);
      this.obsMsg='Video '+res;
      this._designUtility.print(this.obsMsg, 'elContainer');
      this._designUtility.print(this.obsMsg, 'elContainer2');
      this._designUtility.print(this.obsMsg, 'elContainer3');

      if(res>= 6){
        this.videoSubscribtion.unsubscribe();
      }
    })
  }

}
