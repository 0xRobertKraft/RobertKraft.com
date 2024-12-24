import { Component } from "@angular/core";
import { NavComponent } from "./nav/nav.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrl: './content.component.css',
    imports: [NavComponent, MatFormFieldModule, MatInputModule, FormsModule, MatIconModule, MatSlideToggleModule]
})

export class ContentComponent{
    
}