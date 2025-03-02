import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WordListComponent } from './word-list/word-list.component';

export const routes: Routes = [
    {
        path: "",
        title: "Home",
        component: HomeComponent,
    },
    {
        path: "word-list",
        title: "WordList",
        component: WordListComponent,
    },
];
