import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@rehearsiq/layout';

@Component({
	selector: 'rehearsiq-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterModule, HeaderComponent],
	host: {
		class: 'text-foreground block antialiased'
	}
})
export class AppComponent {
	title = 'rehearsiq';
}
