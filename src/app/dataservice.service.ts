import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private apiUrl = 'http://localhost:9090/api/data'; // Replace with your actual API URL
  httpClient: any;

  constructor(private http: HttpClient) { }

  // Example method to fetch data from your backend API
  getChartData(): Observable<any> {
    const endpoint = `${this.apiUrl}/filter`; 
    return this.http.get(endpoint);
  }

  getDataByRegion(region: string): Observable<any>{
    const params = new HttpParams().set('region', region);
    return this.http.get(`${this.apiUrl}/filterregion`, { params });
  }

  getDataByCity(city: string): Observable<any>{
    const apiUrl = `http://localhost:9090/api/data/filtercity?param=${city}`;
    return this.http.get<any>(apiUrl);
  }

  getDataByCountry(country: string): Observable<any>{
    const params = new HttpParams().set('country', country);
    return this.http.get(`${this.apiUrl}/filtercountry`, { params });
  }
  getDataByDate(date: string): Observable<any>{
    const params = new HttpParams().set('date', date);
    return this.http.get(`${this.apiUrl}/filterstartdate`, { params });
  }
}
