import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  apiKey: string = "http://localhost:3000/part"
  constructor(private http: HttpClient) { }

  getAllParticipants() {
    return this.http.get(this.apiKey + "/all");
  }

  updateParticipant(part: any, id: number) {
    return this.http.put(this.apiKey + "/update/" + id, part);
  }

  registerParticipant(part: any, id: number) {
    return this.http.post<any>(`${this.apiKey}/register/${id}`, part);
  }
}
