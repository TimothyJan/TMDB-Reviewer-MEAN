import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit{

  @Input() title: string;
  movieIds = [];

  ngOnInit(): void {
    this.getNowPlaying();
  }

  async getNowPlaying() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=` + environment.tmdbApiKey
    );
    const data = await response.json();
    let results = data.results;
    for(let i=0; i<results.length; i++){
      this.movieIds.push(results[i].id);
    }
    console.log(this.movieIds);
  }

}
