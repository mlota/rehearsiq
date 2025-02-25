import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
	selector: 'rehearsiq-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [HlmInputDirective, HlmFormFieldModule]
})
export class HomeComponent {}
