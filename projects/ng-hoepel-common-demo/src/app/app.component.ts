import { Component } from '@angular/core';
import { Tenant } from '@hoepel.app/types';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, http: HttpClient) {
    console.log(http);
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
