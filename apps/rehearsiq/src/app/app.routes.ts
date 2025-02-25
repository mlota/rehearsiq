import { Route } from '@angular/router';

export const appRoutes: Route[] = [
	{
		path: '',
		loadComponent: () => import('@rehearsiq/home').then(m => m.HomeComponent)
	},
	{
		path: 'home',
		redirectTo: ''
	}
];
