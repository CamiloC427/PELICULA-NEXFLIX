import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgbModalModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginUsername = '';
  loginPassword = '';
  signupUsername = '';
  signupPassword = '';
  private modalRef!: NgbModalRef;

  constructor(public auth: AuthService, private modalService: NgbModal) {}

  openLoginModal(content: any) {
    this.loginUsername = '';
    this.loginPassword = '';
    this.modalRef = this.modalService.open(content);
  }

  openSignupModal(content: any) {
    this.signupUsername = '';
    this.signupPassword = '';
    this.modalRef = this.modalService.open(content);
  }

  confirmLogin() {
    const success = this.auth.login(this.loginUsername, this.loginPassword);
    if (!success) {
      alert('Credenciales inválidas. Inténtalo de nuevo.');
      return;
    }

    this.modalRef.close();
    this.loginUsername = '';
    this.loginPassword = '';
  }

  confirmSignup() {
    const success = this.auth.signUp(this.signupUsername, this.signupPassword);
    if (!success) {
      alert('Este usuario ya está registrado.');
      return;
    }

    this.auth.login(this.signupUsername, this.signupPassword);
    this.modalRef.close();
    this.signupUsername = '';
    this.signupPassword = '';
  }

  logout() {
    this.auth.logout();
  }
}
