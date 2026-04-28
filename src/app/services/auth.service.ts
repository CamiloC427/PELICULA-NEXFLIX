import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: string | null = null;

  // In-memory user store: { username, password }
  private users: { username: string; password: string }[] = [];

  // Register a new user
  signUp(username: string, password: string): boolean {
    const existingUser = this.users.find(user => user.username === username);
    if (existingUser) {
      return false; // User already exists
    }
    this.users.push({ username, password });
    return true;
  }

  // Log in with validation
  login(username: string, password: string): boolean {
    const user = this.users.find(
      user => user.username === username && user.password === password
    );
    if (user) {
      this.currentUser = username;
      return true;
    }
    return false; // Invalid credentials
  }

  logout(): void {
    this.currentUser = null;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  getUser(): string | null {
    return this.currentUser;
  }
}
