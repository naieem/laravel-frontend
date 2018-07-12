import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class DataBearerService {
    private isUserLoggedIn: boolean;
    apiUrl = 'http://localhost:8000/api/';
    newCommentArrived: EventEmitter<any> = new EventEmitter<any>();
    userLoggedInStatusChanged: EventEmitter<any> = new EventEmitter<any>();
    loginStatusUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private http: HttpClient) {
    }

    // =======================================
    // getting all film ======================
    // =======================================
    public getAllFilms(): Observable<any> {
        return this.http.get(this.apiUrl + 'films').map((response: any) => {
            console.log(response);
            return {
                data: response.data,
                total: response.total
            };
        });
    }

    // ======================================
    // getting film by complex query
    // ======================================
    public getByComplexQuery(skip: number): Observable<any> {
        return this.http.post(this.apiUrl + 'films/getByComplexQuery', {skip: skip}).map((response: any) => {
            console.log(response);
            return response;
        });
    }

    // ======================================
    // getting film by slug
    // ======================================
    public getBySlug(slug: string): Observable<any> {
        return this.http.get(this.apiUrl + 'films/getBySlug/' + slug).map((response: any) => {
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

    // ============================================
    // creating new film ==========================
    // ============================================
    public createNewFilm(filmObject: any): Observable<any> {
        return this.http.post(this.apiUrl + 'film/create', filmObject).map((response: any) => {
            return response;
        });
    }

    // =============================================
    // adding new comment ==========================
    // =============================================
    public createComment(commentObject: any): Observable<any> {

        return this.http.post(this.apiUrl + 'comment/add', commentObject).map((response: any) => {
            return response;
        });
    }

    // =============================================
    // login user ==================================
    // =============================================
    public login(loginInfo: any): Observable<any> {

        return this.http.post(this.apiUrl + 'auth/login', loginInfo).map((response: any) => {
            return response;
        });
    }

    // =============================================
    // verify token ================================
    // =============================================
    public getLoggedInUserInfo(): Observable<any> {

        return this.http.get(this.apiUrl + 'auth/getLoggedInUserInfo').map((response: any) => {

            return response;
        });
    }

    // =============================================
    // verify token ================================
    // =============================================
    public logout(): Observable<any> {
        return this.http.get(this.apiUrl + 'auth/logout').map((response: any) => {

            return response;
        });
    }

    // =========================================
    // setting logged in user status ===========
    // =========================================
    public setUserLoggedInStatus(status: boolean) {
        this.isUserLoggedIn = status;
    }

    // =========================================
    // getting logged in user status ===========
    // =========================================
    public getUserLoggedInStatus() {
        return this.isUserLoggedIn;
    }
}
