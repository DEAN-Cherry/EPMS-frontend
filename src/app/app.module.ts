import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTopBarComponent } from './app-topbar/app-topbar.component';
import { MainComponent } from './app.main.component';
import { MenuComponent } from './app.menu.component';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItemComponent } from './app.menu-item.component';
import { ConfigComponent } from './app.config/app.config.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { LandingComponent } from './components/landing/landing.component';
import { DividerModule } from 'primeng/divider';
import { StyleClassModule } from 'primeng/styleclass';
import { LoginComponent } from './components/login/login.component';
import { KeycloakComponent } from './components/keycloak/keycloak.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './api/keycloak-init';
import { AvatarModule } from 'primeng/avatar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ProfileComponent } from './components/profile/profile.component';
import { SchoolComponent } from './components/internship_management/school/school.component';
import { ClassComponent } from './components/internship_management/class/class.component';
import { DashboardComponent } from './components/internship_management/dashboard/dashboard.component';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { OrderListModule } from 'primeng/orderlist';
import { PickListModule } from 'primeng/picklist';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { SchoolCRUDComponent } from './components/internship_management/school-crud/school-crud.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    MainComponent,
    MenuComponent,
    MenuItemComponent,
    ConfigComponent,
    LandingComponent,
    LoginComponent,
    KeycloakComponent,
    ProfileComponent,
    SchoolComponent,
    ClassComponent,
    DashboardComponent,
    SchoolCRUDComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MenuModule,
    RadioButtonModule,
    InputSwitchModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    DividerModule,
    StyleClassModule,
    KeycloakAngularModule,
    AvatarModule,
    OverlayPanelModule,
    PanelMenuModule,
    TieredMenuModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    InputTextModule,
    OrderListModule,
    PickListModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    DialogModule,
    InputNumberModule,
    InputTextareaModule,
    ImageModule,
    ConfirmDialogModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
