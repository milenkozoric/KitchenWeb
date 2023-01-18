import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderDetailsService } from 'src/app/service/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: OrderDetailsService) { }

    getMenuId: any;
    menuData: any;

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params)=>{
        this.getMenuId = params['id'];
        
        if(this.getMenuId){
         this.menuData = this.service.foodDetails.filter((value)=>{
           return value.id == this.getMenuId;
          })
        }
      }
    })
  }

}
