import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
	selector: 'rehearsiq-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
	imports: [
		CommonModule,
		HlmButtonDirective,
		RouterLink,
		NgIcon,
		HlmIconDirective
	],
	host: {
		class:
			'block sticky w-full top-0 z-40 bg-background/95 bg-blur-lg p-2 sm:px-4 border-b border-border'
	},
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
