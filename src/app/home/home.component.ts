import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppService } from 'src/app/app.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(public appService: AppService) {
  }
  ngOnInit() {
    const apiKey: string = environment.env.OPENAI_API_KEY;
    fetch(`https://api.openai.com/v1/models`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+ apiKey,
        }
    }).then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }
}
