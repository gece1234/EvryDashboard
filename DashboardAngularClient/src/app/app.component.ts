import { Component, OnInit } from '@angular/core';

import { ElementInfo } from './ElementInfo';
import { ElementInfoService } from './elementInfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ElementInfoService]
})
export class AppComponent implements OnInit {

    title = 'app works!!!!!!!';
    elementInfos: ElementInfo[];
    constructor(private elementInfoService: ElementInfoService) { }

    ngOnInit(): void {
      
        this.getElementInfos();

    }

    getElementInfos(): void{

        this.elementInfos = this.elementInfoService.getElementInfos();
    }

  
}
