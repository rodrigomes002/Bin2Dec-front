import { ConverterDTO } from './../../models/converterDTO';
import { ConverterService } from './../../services/converter.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators'

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  form!: FormGroup;
  result: string = '';
  errorMessages: string[] = [];
  hasError: boolean = false;
  constructor(
    private converterService: ConverterService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      binary: [''],
    });
  }

  convert() {
    const dto = this.form.getRawValue() as ConverterDTO;
    this.converterService.convert(dto).subscribe(
      (result) => {
        this.result = result;
      },(error)=>{
        let erro = JSON.stringify(error.error);
        let mensagem = erro.split(": ")[1].split("\\r")[0];
        console.log(mensagem);
        this.snackBar.open(mensagem)
    });
  }


}
