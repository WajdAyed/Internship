import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CycleService {

  apiKey: string = "http://localhost:3000/cycle";
  constructor(private http: HttpClient) { }

  public getAllCycles() {
    return this.http.get(this.apiKey + "/all");
  }

  public addCycle(cycle: any) {
    return this.http.post(`${this.apiKey}/add`, cycle);
  }

  public updateCycle(cycle: any, id: number) {
    return this.http.put<any>(`${this.apiKey}/update/${id}`, cycle);
  }

  public deleteCycle(id: number) {
    return this.http.delete(`${this.apiKey}/delete/` + id);
  }

  public addFormerToCycle(id_former: number, id_cycle: number) {
    return this.http.post(this.apiKey + "/add_former/" + id_former + "/" + id_cycle, {});

  }

}
