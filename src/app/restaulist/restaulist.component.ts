import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-restaulist',
  templateUrl: './restaulist.component.html',
  styleUrls: ['./restaulist.component.css']
})
export class RestaulistComponent implements OnInit {
  restauListe = [
    {
      id: 1,
      restauname: "Casa Del Gelato",
      adresse: "Avenue 14 janvier 2011 khezama Est",
      phone: "73270650",
    },
    {
      id: 2,
      restauname: "Mio Mondo",
      adresse: "route touristique khezema 4057, Boulevard du 14 Janvier",
      phone: "73243273",

    },
    {
      id: 3,
      restauname: "Le Saloon",
      adresse: "Boulevard du 14 Janvier, Sousse",
      phone: "50690260",

    },
  ]

  constructor(private userService:UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result=>{
        this.restauListe = result
      },
      error=>{
        console.log(error);
      }
    )
  }
  delete(restau){
    let index = this.restauListe.indexOf(restau);
    this.restauListe.splice(index, 1);

    this.userService.deleteUser(restau._id).subscribe(
      res=>{
        this.toastr.error(res.message);
      },
      err =>{
        console.log(err);
      }
    )
  }

}