import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConverterDTO } from '../models/converterDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  convert(dto: ConverterDTO): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/converter`, dto);
  }
}
