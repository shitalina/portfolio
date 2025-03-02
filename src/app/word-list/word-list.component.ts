import { Component } from '@angular/core';
import { MainComponent } from "../main/main.component";
import { ContentSectionComponent } from "../components/content-section/content-section.component";

@Component({
  selector: 'app-word-list',
  imports: [MainComponent, ContentSectionComponent],
  templateUrl: './word-list.component.html',
  styleUrl: './word-list.component.scss'
})
export class WordListComponent {

}
