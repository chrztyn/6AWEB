import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})

export class DataBinding {
  message = 'Data Binding Demonstration';
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8n2NJzHawbW9sLBhQ9PbyhsOYCcJh5Dw-l9UWdIY5FXhMqqAhVUYQX_IyOg3bv-exAwA&usqp=CAU';
  w = 175;
  h = 150;

  textColor = 'blue';
  yourName = ' ';

  count =0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }


  studentName = "Christine Mae Yunun";
  score = 100;

  imageUrl2 = 'https://cdn.k-ennews.com/news/photo/202504/8286_22103_4335.jpg';
  isDisabled = true;

  colSpanValue = 3;

  isPassing = true;

  boxColor = 'purple';
  boxSize = '150px';
}
