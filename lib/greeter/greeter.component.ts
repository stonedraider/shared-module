import { Component, Input } from '@angular/core';

@Component({
    selector: 'demo-greeter',
    templateUrl: './greeter.component.html',
    styleUrls: ['./greeter.component.less']
})
export class GreeterComponent {

    @Input() name: string = 'Guest';

}