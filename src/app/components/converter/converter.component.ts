import { ConverterDTO } from './../../models/converterDTO';
import { ConverterService } from './../../services/converter.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  form!: FormGroup;
  result: string = "";
  constructor(
    private converterService: ConverterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      binary: ['']
    });
  }

  convert() {
    const dto = this.form.getRawValue() as ConverterDTO;
    this.converterService.convert(dto).subscribe(
      (result)=> {
        this.result = result;
      }
    );
  }
}