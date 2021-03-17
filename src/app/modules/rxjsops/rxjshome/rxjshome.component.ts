import { Component, OnInit } from '@angular/core';
import { of,from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjshome',
  templateUrl: './rxjshome.component.html',
  styleUrls: ['./rxjshome.component.css']
})
export class RxjshomeComponent implements OnInit {

  ofOpRes: any = [];
  fromOpRes: any = [];
  visible: boolean = false;
  constructor() { }

  ngOnInit() {

  }

  launchOps(){
    this.visible = true;
    const ofOp = of(1,1,2,2,3,3,3,4,4,4,4);
    ofOp.subscribe( (val) =>{
      this.ofOpRes.push(val);
    });

    const mappp = from([1,2,3,4,5,6]);
    const exmp = mappp.pipe(map(v => v+10));
    exmp.subscribe( v => {
      this.fromOpRes.push(v)
    });
  }

}
