import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { Image } from 'src/app/models/const/image';

@Component({
  selector: 'app-list-dashborad',
  templateUrl: './list-dashborad.component.html',
  styleUrls: ['./list-dashborad.component.scss']
})
export class ListDashboradComponent implements OnInit {
  @Input() imageList: Array<Image> = [];
  @Output() selectedPicParent: EventEmitter<Image> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public selectedPic(selected: Image) {
    this.selectedPicParent.emit(selected);
  }

}
