import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpened = false;

  listTitles = [
    {
      trailer: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: '/assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia 1',
      relevance: 9,
      age: 0,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia']
    },
    {
      trailer: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: '/assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia 2',
      relevance: 8,
      age: 12,
      parts: 2,
      categories: ['Épico', 'Viagem no espaço']
    },
    {
      trailer: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: '/assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia 3',
      relevance: 98,
      age: 12,
      parts: 2,
      categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
    },
    {
      trailer: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: '/assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia 4',
      relevance: 70,
      age: 16,
      parts: 7,
      categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
    },
    {
      trailer: '/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: '/assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galaxia 5',
      relevance: 7,
      age: 14,
      parts: 9,
      categories: ['Filme de fantasia', 'Viagem no espaço']
    }
  ];

  setMenuState(state: boolean){
    this.menuOpened = state;
  }

  closeMenu(){
    this.menuOpened = false;
  }

}
