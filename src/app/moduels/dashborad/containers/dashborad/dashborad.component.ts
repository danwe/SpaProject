import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/const/image';
import { DataService } from '../../../../cores/services/data.service';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {
  public imageList: Array<Image> = [];
  public imageView: Image = {author: '', width: 0,url: '', id : '',height: 0, download_url: ''};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getValue();
  }


  getValue() {
    this.dataService.getData('v2/list').subscribe((list: Array<Image>) =>{
      this.imageList  = list;
      this.imageView = list[0];
    });
  }

  selectedPicParent(imgSelected: Image): void {
    console.log(imgSelected);
    this.imageView = imgSelected;
    
  }
}
