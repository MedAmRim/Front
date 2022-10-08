import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotelsbyville',
  templateUrl: './hotelsbyville.component.html',
  styleUrls: ['./hotelsbyville.component.css']
})
export class HotelsbyvilleComponent implements OnInit {
public hotels: any;
  constructor(private hotelServ: HotelService) { }

  ngOnInit(): void {
    
  }
  getHotelsByVille(form: any){

    this.hotelServ.getHotelsByVille(form.key).subscribe(
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
