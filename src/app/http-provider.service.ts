import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpProviderService {

  constructor(public http : Http) {}

  getCoach(){
  	return this.http.get('https://mysterious-beach-83937.herokuapp.com/coaches')
  	.map((res:Response) => res.json());
  }

  addCoach(coach){
  	let headers = new Headers({'Content-Type':'application/json'});
  	let options = new RequestOptions({headers : headers});
  	let body = JSON.stringify(coach);
  	return this.http.post('https://mysterious-beach-83937.herokuapp.com/coaches',
  		body,
  		options).map((res:Response) => res.json());
  }

}
