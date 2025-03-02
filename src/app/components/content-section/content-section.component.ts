import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-section',
  imports: [],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.scss'
})
export class ContentSectionComponent {
  @Input() public title:string = "";
}
