import { Injectable } from '@angular/core';

import { ElementInfo } from './elementInfo';
import { ELEMENTINFO } from './mock-elementInfo';

@Injectable()
export class ElementInfoService {
    getElementInfos(): ElementInfo[] { return ELEMENTINFO } // stub
}