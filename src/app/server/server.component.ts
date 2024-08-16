import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss'
})
export class ServerComponent {
  username ?:string ;
  isDisplayed=true
  buttonClickActions=new Array();
  style={
    'backgroundColor':'blue',
  }
  onClear(){
    this.username=undefined;
  }

  onToggleDisplayDetails(){
  this.isDisplayed=!this.isDisplayed; 
  this.buttonClickActions.push(new Date())
  }
}
