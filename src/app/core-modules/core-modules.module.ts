import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModulesComponent } from './core-modules.component';
import { CoreModuleRoute } from './core-modules.route';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { OrderSearchComponent } from './landingPage/order-search/order-search.component';
import { ServicesComponent } from './landingPage/services/services.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared-module/material-module';
import { WorkWithUsComponent } from './landingPage/work-with-us/work-with-us.component';
import { SharedModule } from '../shared-module/shared.module';
import { PageFooterComponent } from './page-footer/page-footer.component';


@NgModule({
    declarations: [CoreModulesComponent, LandingPageComponent, OrderSearchComponent, ServicesComponent, LoginComponent, WorkWithUsComponent, PageFooterComponent],
    imports: [CommonModule, CoreModuleRoute, MaterialModule, SharedModule],
    providers: []
})
export class CoreModule { }