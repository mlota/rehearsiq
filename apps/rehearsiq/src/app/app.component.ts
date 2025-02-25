import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'rehearsiq-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	imports: [RouterModule]
})
export class AppComponent {
	title = 'rehearsiq';
}
