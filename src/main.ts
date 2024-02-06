/// <reference types="@angular/localize" />

import '@angular/localize/init';
import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { VERSION as CDK_VERSION } from '@angular/cdk';
import {
  VERSION as MAT_VERSION,
  MatNativeDateModule,
} from '@angular/material/core';
import { LocalisationExample } from './example/localisation-example';
import { registerLocaleData } from '@angular/common';

import localeDeutsch from '@angular/common/locales/de';
import localeEnglishAU from '@angular/common/locales/en-AU';
import localeEnglishCA from '@angular/common/locales/en-CA';
import localeGB from '@angular/common/locales/en-GB';
import localeEnglishIE from '@angular/common/locales/en-IE';
import localeEnglishNZ from '@angular/common/locales/en-NZ';
import localeEnglishZA from '@angular/common/locales/en-ZA';
import localeSpain from '@angular/common/locales/es';
import localeSpanishAR from '@angular/common/locales/es-AR';
import localeSpanishCO from '@angular/common/locales/es-CO';
import localeFrenchFr from '@angular/common/locales/fr';
import localeFrenchCA from '@angular/common/locales/fr-CA';
import localeItalian from '@angular/common/locales/it';
import localeNetherlands from '@angular/common/locales/nl';
import localeBrazil from '@angular/common/locales/pt';
import localePortuguesePT from '@angular/common/locales/pt-PT';
import localeUndetermined from '@angular/common/locales/und';
import { LocalisationService } from './localisation.service';

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

registerLocaleData(localeGB);
registerLocaleData(localeBrazil);
registerLocaleData(localeNetherlands);
registerLocaleData(localeDeutsch);
registerLocaleData(localeSpanishCO);
registerLocaleData(localeSpanishAR);
registerLocaleData(localeSpain);
registerLocaleData(localeFrenchFr);
registerLocaleData(localeFrenchCA);
registerLocaleData(localeItalian);
registerLocaleData(localePortuguesePT);
registerLocaleData(localeEnglishAU);
registerLocaleData(localeEnglishCA);
registerLocaleData(localeEnglishIE);
registerLocaleData(localeEnglishNZ);
registerLocaleData(localeEnglishZA);
registerLocaleData(localeUndetermined, 'en-XX');

bootstrapApplication(LocalisationExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
    {
      provide: LOCALE_ID,
      useClass: LocalisationService,
    },
  ],
}).catch((err) => console.error(err));
