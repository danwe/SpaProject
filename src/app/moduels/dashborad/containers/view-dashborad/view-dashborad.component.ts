import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/models/const/image';

@Component({
  selector: 'app-view-dashborad',
  templateUrl: './view-dashborad.component.html',
  styleUrls: ['./view-dashborad.component.scss']
})
export class ViewDashboradComponent implements OnInit {
  @Input() imageView: Image = {author: '', width: 0,url: '', id : '',height: 0, download_url: ''};
  constructor() { }

  ngOnInit(): void {
    
  }

}
