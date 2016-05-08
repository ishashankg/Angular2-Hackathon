import {Injectable, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestService {

    constructor(@Inject(Http) private http: Http) {}

    callRestService(twitterId) {
        return this.http.get('/api/username?name='+twitterId)
            .map((res:Response) => res.json());
    }
}
