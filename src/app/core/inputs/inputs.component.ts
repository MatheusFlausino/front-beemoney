import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  @Input() field: any;
  @Input() inputValue: any;
  @Output() inputValueChange = new EventEmitter();
  
  constructor(private http: HttpClient){
  }
  
  change(newValue) {
    this.inputValue = newValue;
    this.inputValueChange.emit(newValue);
  }

  ngOnInit() {
  }

}
