import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

getvalue(val1: String){
  if(val1==''){
    alert("Please provide something")
  }
  else{
    alert(val1);
  }
}

username: string = 'Type something';
  clickme() {
    alert(this.username);
  }
}
