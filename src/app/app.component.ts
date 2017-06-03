import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  componentVisible: string = `recipes`;
  onLinkClicked($event: string) {
    this.componentVisible = $event;
  }
}
