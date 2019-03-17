import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apiario',
  templateUrl: './apiario.component.html',
  styleUrls: ['./apiario.component.scss']
})
export class ApiarioComponent implements OnInit {

  params;
  constructor(protected route: ActivatedRoute, protected router: Router) {    
    // this.category = {};
  }

  ngOnInit() {

      this.route.params.subscribe(params => this.params = params);
      if(this.params && this.params.id){
        // this.CategoriaApi.findById(this.params.id).subscribe((response: any) => {
        //   this.category.name = response.name
        //   this.category.icon = response.icon
        // });
        console.log(this.params);
        
      
    }
  }

}
