import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpProviderService } from './http-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

newcoach = {
  	name : '',
  	description : '',
  }
coaches;

constructor(public httpService : HttpProviderService){
		this.httpService.getCoach()
		.subscribe(data => {
			console.log(data);
			this.coaches=data;
		})
	}
 
saveCoach(newcoach){
  	this.httpService.addCoach(newcoach)
  	.subscribe(data => {
  		console.log(data);

  		this.coaches.push(newcoach);
  		this.newcoach = {
	  	name : '',
	  	description : '',
	  }
  	})
  }
}
