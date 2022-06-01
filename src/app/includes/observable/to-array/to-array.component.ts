import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  sourceSub: Subscription = new Subscription;

  users =[
    {name:'Anup', skill:'Angular'},
    {name:'Shekhar', skill:'HTML, CSS'},
    {name:'Kiran', skill:'JavaScript'},
    {name:'Kumar', skill:'TypeScript'},
  ]
  constructor() { }

  ngOnInit(): void {

  //Example - 01
  const source=interval(1000);
  this.sourceSub =  source.pipe(take(5),toArray()).
  subscribe(res=>{
      console.log(res);

    })

    //Example - 02
    const sourceSub2 = from(this.users);
    sourceSub2.pipe(toArray ())
    .subscribe(res=>{
      console.log(res)
    })

     //Example - 02
     const sourceSub3 = of('Anup','Kiran','Kumar');
     sourceSub3.pipe(toArray()).subscribe(res=>{
       console.log(res)
     })
  }

}
