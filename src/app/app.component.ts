import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MindicadorService } from './api/mindicador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form:FormGroup;
  dateValue:any;
  
  constructor(private indicadoresService: MindicadorService, private fb:FormBuilder) { 
    this.form = this.fb.group({
      year: ['', Validators.required]
    })
  }
  tabla:any;
  search(){
    console.log(this.form.get('year')?.value);
    let year=this.form.get('year')?.value;
    this.indicadoresService.getIndicadores2(year).subscribe(
      res => {
        this.tabla=res['serie'];
      },
      err => console.log(err)
    )
  }

  year:number;
  ngOnInit() {
    let fecha= new Date();
    var year = fecha.getFullYear();
    this.year=year;
  }
}

