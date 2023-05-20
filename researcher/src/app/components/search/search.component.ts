import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private http: HttpClient) {}

  searchReddit() {
  const headers = new HttpHeaders().set("Authorization", `bearer ${environment.bearerToken}`).set("User-Agent", "ChangeMeClient/0.1 by kendzialo");
  this.http.get('https://oauth.reddit.com/r/BuyItForLife/search', {headers, params: { q: 'headphones', sort: 'relevance', t: 'all', restrict_sr: 'on'}})
  .subscribe((data: any) => {
    const postIds = data.data.children.map((post: any) => post.data.id);
    console.log(postIds);
  })
  }
}
