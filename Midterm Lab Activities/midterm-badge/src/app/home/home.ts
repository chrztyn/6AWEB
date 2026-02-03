import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api-service';
import { Post } from '../post.model';
import { TitleCaseWordsPipe } from '../title-case-words-pipe';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [TitleCaseWordsPipe, DatePipe, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 posts$: Observable<Post[]>;
  today = new Date();

  constructor(private apiService: ApiService) {
    this.posts$ = this.apiService.posts$;
  }
}
