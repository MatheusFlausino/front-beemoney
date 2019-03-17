import { Component, OnInit } from '@angular/core';
import { UsuarioApi } from '../../../assets/js/services';
import { LoopBackConfig,LoopBackAuth }        from '../../../assets/js/';
import {NgForm} from '@angular/forms';
import { AccessToken }  from '../../../assets/js//models';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  toggleFormClass;
  password;

  constructor(private UsuarioApi:UsuarioApi) {
   }

  ngOnInit() { }

  login(f: NgForm) {    
    if(f.form.valid){
      this.UsuarioApi.login({email:f.form.value.email,password:f.form.value.password}).subscribe((response: any) => {
        LoopBackConfig.setAuthPrefix(response)   
        window.location.reload();  
      });
    }
  }
  showSignUp() {
    this.toggleFormClass = 'bounceLeft';
  }

  showLogin() {
    this.toggleFormClass = 'bounceRight';
  }

}
