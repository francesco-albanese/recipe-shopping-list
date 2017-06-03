import { 
    Component, 
    EventEmitter, 
    Output, 
    Input } from '@angular/core';

@Component({
    selector: `app-header`,
    templateUrl: `./header.component.html`,
    styleUrls: [`./header.component.scss`]
})

export class HeaderComponent {
    @Output() linkClicked = new EventEmitter<string>();
    
    onLinkClicked(event: Event) {
        this.linkClicked.emit((<HTMLAnchorElement>event.target).textContent.toLowerCase());
    }
}