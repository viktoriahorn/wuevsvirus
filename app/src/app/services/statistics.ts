import { HttpClient } from '@angular/common/http';

export class StatisticsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public async getAll(): Promise<any> {
    const data = await this.http.get('').toPromise();
    return data;
  }

  public getByLocation(zip: string): Promise<JSON> {
    return null;
  }
}