import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Film} from './films/film';
@Injectable()
export class DataBearerService {
    apiUrl = 'http://localhost:8000/api/';

    constructor(private http: HttpClient) {
    }
    // =======================================
    // getting all film ======================
    // =======================================
    public getAllFilms(): Observable<any> {
        return this.http.get(this.apiUrl + 'films').map((response: any) => {
            console.log(response);
            return {
                data:response.data,
                total: response.total
            };
        });
    }
    // ======================================
    // getting film by complex query
    // ======================================
    public getByComplexQuery(skip:number): Observable<any> {
        return this.http.post(this.apiUrl + 'films/getByComplexQuery', {skip: skip}).map((response: any) => {
            console.log(response);

            return response;
        });
    }
    // ======================================
    // getting film by slug
    // ======================================
    public getBySlug(slug:string): Observable<any> {
        return this.http.get(this.apiUrl + 'films/getBySlug/' + slug ).map((response: any) => {
            console.log(response);

            return response;
        });
    }
    // ============================================
    // registering new user =======================
    // ============================================
    public registernewuser(userData: any): Observable<any> {
        return this.http.post(this.apiUrl + 'user/new', userData).map((response: any) => {

            return response;
        });
    }
    public createNewFilm(filmObject: any): Observable<any> {
        debugger;
        return this.http.post(this.apiUrl + 'film/create', filmObject).map((response: any) => {
            debugger;
            return response;
        });
    }
}
