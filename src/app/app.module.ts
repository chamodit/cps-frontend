import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfilesComponent } from './components/dashboard/profiles/profiles.component';
import { CreateProfileComponent } from './components/dashboard/profiles/create-profile/create-profile.component';
import {
  ManageProfileComponent,
  DialogBoxUserDel,
} from './components/dashboard/profiles/manage-profile/manage-profile.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './shared/user.service';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { RequisitionsComponent } from './components/dashboard/requisitions/requisitions.component';
import { ManageRequisitionComponent } from './components/dashboard/requisitions/manage-requisition/manage-requisition.component';
import { ProjectsComponent } from './components/dashboard/projects/projects.component';
import { CreateProjectComponent } from './components/dashboard/projects/create-project/create-project.component';
import {
  ManageProjectComponent,
  DialogBoxSiteDel,
} from './components/dashboard/projects/manage-project/manage-project.component';
import { OrdersComponent } from './components/dashboard/orders/orders.component';
import { SuppliersComponent } from './components/dashboard/suppliers/suppliers.component';
import { CreateSupplierComponent } from './components/dashboard/suppliers/create-supplier/create-supplier.component';
import {
  ManageSupplierComponent,
  DialogBoxSupDel,
} from './components/dashboard/suppliers/manage-supplier/manage-supplier.component';
import { PaymentsComponent } from './components/dashboard/payments/payments.component';
import { ManageOrderComponent, DialogBox } from './components/dashboard/orders/manage-order/manage-order.component';
import { StocksComponent } from './components/dashboard/stocks/stocks.component';
import { AddStocksComponent } from './components/dashboard/stocks/add-stocks/add-stocks.component';
import {
  ManageStocksComponent,
  DialogBoxStockDel,
} from './components/dashboard/stocks/manage-stocks/manage-stocks.component';
import { ViewRequisitionComponent } from './components/dashboard/requisitions/view-requisition/view-requisition.component';

import { ChartsModule } from 'ng2-charts';
import { ViewItemsComponent } from './components/dashboard/orders/view-items/view-items.component';

@NgModule({
  entryComponents: [
    DialogBoxUserDel,
    DialogBoxSiteDel,
    DialogBoxSupDel,
    DialogBoxStockDel,
    DialogBox
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ProfilesComponent,
    CreateProfileComponent,
    ManageProfileComponent,
    OverviewComponent,
    RequisitionsComponent,
    ManageRequisitionComponent,
    ProjectsComponent,
    CreateProjectComponent,
    ManageProjectComponent,
    OrdersComponent,
    SuppliersComponent,
    CreateSupplierComponent,
    ManageSupplierComponent,
    PaymentsComponent,
    DialogBoxUserDel,
    ManageOrderComponent,
    DialogBoxSiteDel,
    DialogBoxSupDel,
    StocksComponent,
    AddStocksComponent,
    ManageStocksComponent,
    DialogBoxStockDel,
    ViewRequisitionComponent,
    DialogBox,
    ViewItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    ChartsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
