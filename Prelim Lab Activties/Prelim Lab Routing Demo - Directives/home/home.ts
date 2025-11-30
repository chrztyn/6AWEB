import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    person = {
    name: 'Christine Mae D. Yunun',
    title: 'Back End Web Developer',
    email: 'christineyunun@gmail.com',
    phone: '0929 369 6884',
    address: 'Sindalan, CSFP',
    bio: '  A highly passionate individual about web development, especially in backend development.My primary goal is to improve my skills and  build a scalable, high-performance, and user friendly  web applications.',

    imageUrl: 'https://cdn.k-ennews.com/news/photo/202504/8286_22103_4335.jpg'
  };
}
