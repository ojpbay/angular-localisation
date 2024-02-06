import { Injectable } from '@angular/core';
@Injectable()
export class LocalisationService extends String {
  constructor() {
    super();
  }

  override toString() {
    const locale = localStorage.getItem('locale');
    return locale || 'en-GB';
  }

  getLocale(): string {
    return localStorage.getItem('locale') || 'en-GB';
  }

  setLocale(locale: string):void {
    localStorage.setItem('locale', locale)
  }
}
