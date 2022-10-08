import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public hotels!: Hotel[];
  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {

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

}
