import {
    Component,
    OnInit
} from '@angular/core';
import { SOCIAL_LINKS } from '@dr-shared/models';

@Component({
    selector: 'dr-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    blogLink: string = '/blog';
    socialLinks = SOCIAL_LINKS;
    constructor() {
    }

    ngOnInit() {
    }

}
