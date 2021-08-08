import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/const/image';

@Component({
  selector: 'app-detail-image',
  templateUrl: './detail-image.component.html',
  styleUrls: ['./detail-image.component.scss']
})
export class DetailImageComponent implements OnInit {
  @Input() detail : Image =  {author: '', width: 0,url: '', id : '',height: 0, download_url: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
