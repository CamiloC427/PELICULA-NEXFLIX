import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Output() openModal = new EventEmitter<void>();

  genreTranslate: Record<string, string> = {
    'Sci-Fi': 'Ciencia Ficción',
    'Drama': 'Drama',
    'Action': 'Acción',
    'Comedy': 'Comedia',
    'Crime': 'Crímen',
    'Romance': 'Romance'
  };

  onClick() {
    this.openModal.emit();
  }
}
