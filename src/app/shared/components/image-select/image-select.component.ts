import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/const/image';
import {  ConsoleLogService } from '../../../cores/services/console-log.service';

@Component({
  selector: 'app-image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.scss']
})
export class ImageSelectComponent implements OnInit {
  @Input() imageView: Image = {author: '', width: 0,url: '', id : '',height: 0, download_url: ''};

  constructor(private consoleLogService: ConsoleLogService) { }

  ngOnInit(): void {
  }

  public mouseEnter() {
    this.consoleLogService.consoleLogIn(this.imageView).subscribe((list: Array<Image>) =>{
    });
  }
  

}
