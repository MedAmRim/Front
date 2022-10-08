import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipement } from 'src/app/models/equipement';
import { EquipementService } from 'src/app/services/equipement.service';

@Component({
  selector: 'app-listequipements',
  templateUrl: './listequipements.component.html',
  styleUrls: ['./listequipements.component.css']
})
export class ListequipementsComponent implements OnInit {
  public equipements!: Equipement[];


  constructor(private root: Router,private equiServ: EquipementService) { }

  ngOnInit(): void {
    console.log("teset2");
  this.getEquipements();
  }
 /* getEquipements(){

    this.equiServ.getEquipements()
    .subscribe(data=>{
      this.equipements=data;
    },err=>{
      console.log(err);
    }
    

    )

  }
*/
 getEquipements(){

  this.equiServ.getEquipements().subscribe(
    (response: Equipement[]) => {
      this.equipements = response;
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );

}
}
