import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConverterDTO } from '../models/converterDTO';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  private baseUrl = 'https://localhost:5001/api';
  constructor(private http: HttpClient) { }

  convert(dto: ConverterDTO): Observable<any>{
    return this.http.post(`${this.baseUrl}/converter`, dto);
  }
}
