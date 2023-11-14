import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormerService {

  apiKey: string = "http://localhost:3000/former";
  constructor(private http: HttpClient) { }

  public getAllFormers() {
    return this.http.get(this.apiKey + "/all")
  }

  public addFormer(Former: any) {
    return this.http.post(this.apiKey + "/add", Former);
  }

  public updateFormer(Former: any, id: number) {
    return this.http.put(`${this.apiKey}/update/${id}`, Former);
  }

  public deleteFormer(id: number) {
    return this.http.delete(`${this.apiKey}/delete/${id}`);
  }
}
