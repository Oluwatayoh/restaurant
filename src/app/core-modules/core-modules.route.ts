import { RouterModule, Routes } from '@angular/router';
import { CoreModulesComponent } from './core-modules.component';
import { LandingPageComponent } from './landingPage/landingPage.component';

const COREMODULE_ROUTES: Routes = [
    {
        path: '', component: CoreModulesComponent,
        children: [
            { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
            { path: 'landing-page', component: LandingPageComponent }
        ]
    }
];

export const CoreModuleRoute = RouterModule.forChild(COREMODULE_ROUTES);