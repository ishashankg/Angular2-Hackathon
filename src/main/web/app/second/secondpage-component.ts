import {Component} from 'angular2/core';
import {SharedService} from '../service/sharedService';
import {RestService} from '../service/restService';
import {Router} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
@Component({
  selector: 'secondPage',
  templateUrl: 'app/second/second.component.html',
})

export class SecondPageComponent   {

  private router:Router;
  private service:SharedService;
  private restService : RestService;
  private http:Http;
  private twitterId: string;
  private jsonResponse: string;
  private message: string;
  private result:string;
  
  constructor(router:Router,service:SharedService, http:Http, restService:RestService)
  {
    this.router=router;
    this.service=service;
    this.restService = restService;
    this.twitterId=service.getData();
  }

  ngOnInit() {
        this.restService.callRestService(this.twitterId).subscribe(
            data => {this.jsonResponse = JSON.stringify(data)}
        );
    }

  back()
  {
    this.router.navigate(['/HomePageComponent']);
  }
  
}