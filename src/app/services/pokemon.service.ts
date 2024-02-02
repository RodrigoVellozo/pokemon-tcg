import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(query: any){
    console.log('>>>',query)
    return this.http.get<any>(environment.baseApiV2).pipe(map(res=>res.data));
  }
}
