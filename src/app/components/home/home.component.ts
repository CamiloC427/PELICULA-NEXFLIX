import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { AuthService } from '../../services/auth.service'; // ✅ Auth service import

interface Comment {
  user: string;
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  movies: Movie[] = [];
  searchQuery = '';
  selectedMovie: Movie | null = null;
  newComment = ''; // ✅ Input for comment

  @ViewChild('movieModal') movieModal!: TemplateRef<any>;

  constructor(
    private movieService: MovieService,
    private modalService: NgbModal,
    public auth: AuthService // ✅ Injected for use in template and logic
  ) {
    this.movies = this.movieService.getMovies();
  }

  get filteredMovies(): Movie[] {
    return this.movieService.searchMovies(this.searchQuery);
  }

  openMovieModal(movie: Movie) {
    this.selectedMovie = movie;
    this.modalService.open(this.movieModal);
  }

  // ✅ Add a new comment
  addComment() {
    if (this.newComment.trim() && this.selectedMovie && this.auth.isLoggedIn()) {
      this.selectedMovie.comments = this.selectedMovie.comments || [];
      this.selectedMovie.comments.push({
        user: this.auth.getUser()!,
        text: this.newComment.trim(),
        timestamp: new Date()
      });
      this.newComment = '';
    }
  }

  // ✅ Delete a comment
  deleteComment(comment: Comment) {
    if (this.selectedMovie?.comments) {
      this.selectedMovie.comments = this.selectedMovie.comments.filter(c => c !== comment);
    }
  }
}
