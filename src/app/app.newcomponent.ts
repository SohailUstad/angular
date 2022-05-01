import { Component } from "@angular/core";

@Component({
    selector: 'new-component',
    templateUrl: './app.newcomponent.html',
    styleUrls: ['./app.newcomponent.css']
})
export class NewComponent {
    clickCount = 0;
    clickMe() {
        this.clickCount++;
    }
    reset(){
        this.clickCount=0;
    }

}