import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addbtn') addbtn!:ElementRef;
  constructor(private _designUtility:DesignUtilityService) { }
  ngAfterViewInit(): void {
    let count=1;
    fromEvent(this.addbtn.nativeElement, 'click').subscribe(res=>{
      let countval = 'Video'+ count++;
      console.log(countval);
      this._designUtility.print(countval, 'elContainer');
      this._designUtility.print(countval, 'elContainer2');
    })
  }

  ngOnInit(): void { 
  }

  
}
