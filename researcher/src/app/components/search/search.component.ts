import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  bearerToken: string = "eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjphVXJUQUUrdnZWVTl4K0VMWFNGWEcrNk5WS1FlbEdtSjlWMkQxcWlCZ3VnIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjg0NjU2MjkzLjcwMTMyMSwiaWF0IjoxNjg0NTY5ODkzLjcwMTMyMCwianRpIjoiNTU3NTIwMjctNUdxUGxHUVBqWlg5U1lXLXR5ZC0yc3RGaWhWcVlRIiwiY2lkIjoiYmdTWFNtaVRRYWhtR2FzcXd1RVQyZyIsImxpZCI6InQyX3g2eWpmIiwiYWlkIjoidDJfeDZ5amYiLCJsY2EiOjE0NjA3MTg0NjIzNTUsInNjcCI6ImVKeUtWdEpTaWdVRUFBRF9fd056QVNjIiwiZmxvIjo5fQ.7RfLtRgMrHUCKUjlmOnBAbw4jkuovkpnClQkm66gk2sAQe8_ouVyRejj5PG0R2ZMDFJ8ZVVzY32I86PcgpFFEN9KWEdWgytWhqvc-rY7aZmI1vh8WiKQQxAPlqFaujeNzdNR1dwc3C3VotTQILHVQ7_A8aDbsVaJBcGSDWIjAvPGnh-ZA3iHrOP63t6uuRsEFEjZwBtMq-RWEYk5Mp8OZTTQHy7tnDtxCAFvL7IOvCv6VUjlrZM6OlZa6JMr1OWcIA-oTF0FD5wS5VMIy4isVX7v4cwTz3wLyWDoTAhy7i3huxuFlv78MQnNZam27C7dYdN524HKLSeVzxDK8wmQhw"

  constructor(private http: HttpClient) {}


  searchReddit() {
  const headers = new HttpHeaders().set("Authorization", `bearer ${this.bearerToken}`).set("User-Agent", "ChangeMeClient/0.1 by kendzialo");
  this.http.get('https://oauth.reddit.com/r/BuyItForLife/search', {headers, params: { q: 'headphones', sort: 'relevance', t: 'all', restrict_sr: 'on'}})
  .subscribe((data: any) => {
    const postIds = data.data.children.map((post: any) => post.data.id);
    console.log(postIds);
  })
  }
}
