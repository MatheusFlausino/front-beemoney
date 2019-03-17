import { Component, OnInit } from '@angular/core';
import { UsuarioApi } from '../../../assets/js/services';
import { LoopBackConfig, LoopBackAuth } from '../../../assets/js/';
import { NgForm } from '@angular/forms';
import { AccessToken } from '../../../assets/js//models';
import swal from 'sweetalert2';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  toggleFormClass;
  password;

  constructor(private UsuarioApi: UsuarioApi) {
  }

  ngOnInit() { }

  login(f: NgForm) {    
    if (f.form.valid) {
      this.UsuarioApi.login({ email: f.form.value.email, password: f.form.value.password }).subscribe(
        // (response: any) => {
        // debugger;
        // LoopBackConfig.setAuthPrefix(response)   
        // window.location.reload();  
        // }
        data => {
        LoopBackConfig.setAuthPrefix(data)   
        window.location.reload();  
        },
        err => {
          swal({
            title: 'Senha incorreta',
            text: 'Tem certeza de sua senha, apicultor?',
            imageUrl: '/assets/img/bee-cry.png',
            imageWidth: 200,
            imageHeight: 200,   
            confirmButtonText: 'Voltar',

          })
          
        },
      )
    }
  }
  showSignUp() {
    this.toggleFormClass = 'bounceLeft';
  }

  showLogin() {
    this.toggleFormClass = 'bounceRight';
  }

}
