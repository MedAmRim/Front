import { Component, Input, OnInit,OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/models/chambre';
import { Hotel } from 'src/app/models/hotel';
import { ChamberService } from 'src/app/services/chamber.service';

@Component({
  selector: 'app-listchambers',
  templateUrl: './listchambers.component.html',
  styleUrls: ['./listchambers.component.css']
})
export class ListchambersComponent implements OnInit,OnChanges {
   chambers_!:Chambre[];
  public data!: Chambre[]; 
   


  constructor(private chamberServ: ChamberService, private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("zineb");
    for (let property in changes) {
      if (property === 'chambers_') {
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
        console.log('firstChange:', changes[property].firstChange);
      } 
  }
  }

  ngOnInit() {
    this.getAdresses();

  }
  
  receiveData(data : Chambre[]) { this.chambers_ = data;
    console.log("test2"+this.chambers_);}
    getAdresses(){
      this.chamberServ.getChambers().subscribe(data=>{
        this.chambers_=data;
        console.log(data);
      },err=>{
        console.log(err);
      }
      
  
      )
    }
}
