import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, PercentPipe } from '@angular/common';
import { ILocale } from './localisation.model';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LocalisationService } from 'src/localisation.service';

/** @title Basic datepicker */
@Component({
  selector: 'localisation-example',
  templateUrl: 'localisation-example.html',
  standalone: true,
  providers: [provideNativeDateAdapter(), LocalisationService],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LocalisationExample implements OnInit {
  public decimal: number;
  public date: Date;
  public percentage: number;
  public integer: number;
  public integerLarge: number;

  public locales: ILocale[];
  public selectedLocale: string;
  public form: FormGroup;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    fb: FormBuilder,
    private readonly localisationService: LocalisationService
  ) {
    this.form = fb.group({
      locale: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.form.controls['locale'].patchValue(
      this.localisationService.getLocale()
    );

    this.form.controls['locale'].valueChanges.subscribe((x) => {
      console.log(x);
      this.selectedLocale = x;
      this.localisationService.setLocale(x);
      window.location.reload();
    });

    this.selectedLocale = this.locale;

    this.locales = [
      { name: 'Argentina', isoCode: 'es-AR' },
      { name: 'Australia', isoCode: 'en-AU' },
      { name: 'Brazil', isoCode: 'pt-BR' },
      { name: 'Canada', isoCode: 'fr-CA' },
      { name: 'Colombia', isoCode: 'es-CO' },
      { name: 'France', isoCode: 'fr-FR' },
      { name: 'Germany', isoCode: 'de-DE' },
      { name: 'Ireland', isoCode: 'en-IE' },
      { name: 'Italy', isoCode: 'it-IT' },
      { name: 'Netherlands', isoCode: 'nl-NL' },
      { name: 'Netherlands (Eng)', isoCode: 'en-NL' },
      { name: 'New Zealand', isoCode: 'en-NZ' },
      { name: 'Portugal', isoCode: 'pt-PT' },
      { name: 'South Africa', isoCode: 'en-ZA' },
      { name: 'Spain', isoCode: 'es-ES' },
      { name: 'UK', isoCode: 'en-GB' },
      { name: 'USA', isoCode: 'en-US' },
    ];

    this.setData();
  }

  public setData(): void {
    this.decimal = 3456789.99;
    this.integer = 88;
    this.integerLarge = 12000;
    this.date = new Date();
    this.percentage = 88.123456;
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
