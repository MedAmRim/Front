import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Adresse } from 'src/app/models/adresse';
import { Chambre } from 'src/app/models/chambre';
import { Hotel } from 'src/app/models/hotel';
import { AdresseService } from 'src/app/services/adresse.service';
import { ChamberService } from 'src/app/services/chamber.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-listehotels',
  templateUrl: './listehotels.component.html',
  styleUrls: ['./listehotels.component.css']
})
export class ListehotelsComponent implements OnInit {
   public hotels!: Hotel[];
   public adresses!: Adresse[];
  public chambers!: Chambre[];
  @Output() event_ = new EventEmitter<Chambre[]>();
  constructor(private router: Router, 
              private hotelService: HotelService, 
              private adr: AdresseService, 
              private chamberServ: ChamberService) { }

  ngOnInit(): void {
        this.getChamberByHotel(1);
  }
  onGetHotels(){

    this.hotelService.getHotels()
    .subscribe(data=>{
      this.hotels=data;
    },err=>{
      console.log(err);
    }
    

    )

  }
  getHotelsByVille(form: any){

    this.hotelService.getHotelsByVille(form.key).subscribe(
      (response: Hotel[]) => {
        this.hotels = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    }

    getAdresses(){
      this.adr.getAdresses().subscribe(data=>{
        this.adresses=data;
      },err=>{
        console.log(err);
      }
      
  
      )
    }
     getChamberByHotel(row: number){
      this.chamberServ.getChamberByHotel(row).subscribe(data=>{
        this.chambers=data;
      },err=>{
        console.log(err);
      }
      )
      console.log("data2"+this.chambers);
     
     this.router.navigateByUrl("/chambers");
     } 
}
