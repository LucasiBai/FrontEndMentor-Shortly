import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public get isLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  public set setLoading(bool: boolean) {
    this.isLoading$.next(bool);
  }

  public switchLoading() {
    this.setLoading = !this.isLoading$.value;
  }
}
