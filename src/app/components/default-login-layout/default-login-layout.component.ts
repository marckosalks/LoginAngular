import { Component, Input } from '@angular/core';
import { LoginComponent } from '../../pages/login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [LoginComponent, LoginComponent, CommonModule],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = 'login into your account';
  @Input() primaryBtnText: string = 'Login Now';
  @Input() secondaryBtnText: string = 'Signup Now';
}
