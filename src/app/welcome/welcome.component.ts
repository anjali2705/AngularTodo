import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomedataService } from '../service/data/welcomedata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'some welcome message'
  WelcomeMessageFromService : string | undefined 
   name=''
  constructor(private route:ActivatedRoute,
       private service: WelcomedataService) { }

  ngOnInit() {
    this.name= this.route.snapshot.params['name']
    //console.log(this.route.snapshot.params['name'])
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService().subscribe());
    this.service.executeHelloWorldBeanService().subscribe(
     response => this.handleSuccessMesage(response.message)
    );
  }

  handleSuccessMesage(response:any){
    console.log(response)
   this.WelcomeMessageFromService = response
  }

  handleError(error : any){
    this.WelcomeMessageFromService = error.error.message
  }


}
