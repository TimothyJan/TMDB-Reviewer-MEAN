import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {
  images;
    responsiveOptions;

    constructor() {
        this.responsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 3
        }];
    }

    ngOnInit(): void {
        this.images = [
            {random: 'Random', picture: 'https://picsum.photos/id/944/900/500'},
            {random: 'Samoa', picture: 'https://picsum.photos/id/1011/900/500'},
            {random: 'Tonga', picture: 'https://picsum.photos/id/984/900/500'},
            {random: 'Cook Island', picture: 'https://picsum.photos/id/944/900/500'},
            {random: 'Niue', picture: 'https://picsum.photos/id/1011/900/500'},
            {random: 'American Samoa', picture: 'https://picsum.photos/id/984/900/500'}
        ];
    }
}
