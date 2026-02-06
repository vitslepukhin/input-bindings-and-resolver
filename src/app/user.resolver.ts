import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { delay, of } from 'rxjs';

export interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  lastLogin: Date;
}

export const userResolver: ResolveFn<UserData> = (route) => {
  const userId = route.paramMap.get('userId');

  const userData: UserData = {
    id: Number(userId),
    name: 'Иван Петров',
    email: 'ivan.petrov@example.com',
    role: 'Administrator',
    lastLogin: new Date()
  };

  return of(userData).pipe(delay(3000));
};
