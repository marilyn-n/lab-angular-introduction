import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  champions: Array<any> = [
    {
      championship_year: '1996-13',
      championName: 'Golden State',
      url_img: 'https://elpaisanoonline.com/wp-content/uploads/2017/04/329949-champions-logo.jpg'
    },
    {
      championship_year: '1996-13',
      championName: 'Golden State',
      url_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19snPhXFym6kjOeALiKKTFseQGa-JJssEvdbY7hoaxX1uCe2f'
    },
    {
      championship_year: '1996-13',
      championName: 'Golden State',
      url_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDLg5dOm3BiS4w7G0W4LIoqNhOakeApFDL4cxVbyvHjnq3ARYH'
    }
  ];

  players: Array<any> = [
    { name: 'Rafaelo', lastName: 'Benjamin'},
    { name: 'Kevin', lastName: 'Darwin'},
    { name: 'Rafaelo', lastName: 'Benjamin'},

  ];


  constructor() { }

  ngOnInit() {
  }

}

