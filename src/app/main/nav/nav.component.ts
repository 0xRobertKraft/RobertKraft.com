import { Component } from "@angular/core";
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    imports: [MatGridListModule]
})

export class NavComponent{
    rowHeight = '200px';
}