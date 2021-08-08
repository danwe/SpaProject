import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { Image } from 'src/app/models/const/image';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {
  @Input() image: Image = {author: '', download_url: '',height : 0, id: '', url: '', width: 0};

  @Output() selectedPic: EventEmitter<Image> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public selectPic(imgSelect: Image) {
    this.selectedPic.emit(imgSelect);
  }
}
