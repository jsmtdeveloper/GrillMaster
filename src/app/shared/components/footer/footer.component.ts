import { Component, OnInit } from '@angular/core';

/**
 * App footer definition
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  /**Author of the application and current year */
  authorAndCurrentYear: string = `©JsmtDeveloper - ${new Date().getFullYear()}`;
}
