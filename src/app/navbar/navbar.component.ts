import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { HostListener } from '@angular/core';
import { CommonService } from '../common.service';
import { LoopBackConfig,LoopBackAuth } from '../../assets/js/';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  previousScroll = 0;
  commonService;
  constructor(private cs: CommonService,private LoopBackAuth:LoopBackAuth) {
    this.commonService = cs;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 60 && currentScroll < $(document).height() - $(window).height()) {
      if (currentScroll > this.previousScroll) {
        this.hideNavbar();
      } else {
        this.showNavbar();
      }
      this.previousScroll = currentScroll;
    }
  }
  logout = () =>{
    this.LoopBackAuth.clear();
    window.location.reload();
  }

  hideNavbar = () => {
    setTimeout(() => {
      this.cs.navbarToggleValue = true;
    }, 300);
  }

  showNavbar = () => {
    setTimeout(() => {
      this.cs.navbarToggleValue = false;
    }, 300);
  }

}
