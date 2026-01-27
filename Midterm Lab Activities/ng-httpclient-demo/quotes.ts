import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Quote } from './quote.model';

interface QuoteResponse {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private quotesUrl = 'https://dummyjson.com/quotes';

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<Quote[]> {

    const cachedQuotes = localStorage.getItem('quotes');
    if (cachedQuotes) {
      return of(JSON.parse(cachedQuotes));
    }

    // Fetch from API, extract the quotes array, and cache it
    return this.http.get<QuoteResponse>(this.quotesUrl).pipe(
      map(response => response.quotes),          // Extract quotes array
      tap(quotes => localStorage.setItem('quotes', JSON.stringify(quotes)))
    );
  }
}
