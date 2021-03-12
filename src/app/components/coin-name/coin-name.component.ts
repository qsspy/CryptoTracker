import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-name',
  templateUrl: './coin-name.component.html',
  styleUrls: ['./coin-name.component.css']
})
export class CoinNameComponent implements OnInit {

  @Input() name: string = 'Lorem'
  @Input() shortName: string = 'IPS'
  @Input() imageUrl : string = 'https://static.wikia.nocookie.net/memes/images/9/9a/Troll-face.jpg/revision/latest?cb=20150924183516&path-prefix=pl'

  constructor() { }

  ngOnInit(): void {
  }

}
