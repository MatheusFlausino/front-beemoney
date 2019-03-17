import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoriaApi } from '../../../assets/js/services';

@Component({
  selector: 'app-new-categories',
  templateUrl: './new-categories.component.html',
  styleUrls: ['./new-categories.component.scss']
})
export class NewCategoriesComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  
  params;
  category;

  constructor(protected route: ActivatedRoute, protected router: Router, private CategoriaApi: CategoriaApi) {    
    this.category = {};
  }

  save(f: NgForm) {
    if (f.form.valid && f.form.value.name != '' && f.form.value.icon != '') {
      let obj = { name: f.form.value.name, icon: f.form.value.icon };
      this.params.id ? obj['id'] = this.params.id : null;
      this.CategoriaApi.upsert(obj).subscribe((response: any) => {
        f.form.reset();
        this.router.navigate(['/categories'])
      });
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.params = params);
    if(this.params && this.params.id){
      this.CategoriaApi.findById(this.params.id).subscribe((response: any) => {
        this.category.name = response.name
        this.category.icon = response.icon
      });
      
    }
  }

}
