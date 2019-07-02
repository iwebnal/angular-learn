import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { switchMap, delay } from "rxjs/operators";


export class CustomPreloadingStrategy implements PreloadingStrategy {

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if(route.data && route.data['noreload']) {
            return of(null);
        }

        return of(true).pipe(delay(3000), switchMap( (_: Boolean) => load() ) );
    }
}