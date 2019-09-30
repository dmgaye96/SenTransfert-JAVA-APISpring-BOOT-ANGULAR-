import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
//import { FormsComponent } from './pages/forms/forms.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SidebarcaissierComponent } from './components/sidebarcaissier/sidebarcaissier.component';
import { DepotComponent } from './depot/depot.component';
import { SidebaradminpComponent } from './components/sidebaradminp/sidebaradminp.component';
import { SidebaruserComponent } from './components/sidebaruser/sidebaruser.component';
import { EnvoiComponent } from './envoi/envoi.component';
import { RetraitComponent } from './retrait/retrait.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddpartenaireComponent } from './addpartenaire/addpartenaire.component';
import { ListepartenaireComponent } from './listepartenaire/listepartenaire.component';
import { AddcompteComponent } from './addcompte/addcompte.component';
import { PartenaireService } from './partenaires.service';
import { AddpartanduserComponent } from './addpartanduser/addpartanduser.component';
import { ComptespartnaireComponent } from './comptespartnaire/comptespartnaire.component';
import { UserpartenaireComponent } from './userpartenaire/userpartenaire.component';
import { CompteuserComponent } from './compteuser/compteuser.component';
import { RembousementComponent } from './rembousement/rembousement.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DataTablesModule } from 'angular-datatables';
import { RegisterService } from './services/register.service';
import { MaterialModule   } from './material/material.module';
import { ContratComponent } from './contrat/contrat.component';
//import { HistoriqueComponent } from './historique/historique.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AloueruncompteComponent } from './aloueruncompte/aloueruncompte.component';
import { NavbarloginComponent } from './navbarlogin/navbarlogin.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TablesComponent,
  //  FormsComponent,
    TypographyComponent,
    MapsComponent,
    NotificationsComponent,
    SigninComponent,
    SignupComponent,
    RegisterComponent,
    SidebarcaissierComponent,
    DepotComponent,
    SidebaradminpComponent,
    SidebaruserComponent,
    EnvoiComponent,
    RetraitComponent,
    AdduserComponent,
    AddpartenaireComponent,
    ListepartenaireComponent,
    AddcompteComponent,
    AddpartanduserComponent,
    ComptespartnaireComponent,
    UserpartenaireComponent,
    CompteuserComponent,
    RembousementComponent,
    TransactionsComponent,
    ContratComponent,
    AloueruncompteComponent,
    NavbarloginComponent,
  //  HistoriqueComponent,


  ],
  imports: [

    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    DataTablesModule,
    PdfViewerModule,

    ],
  providers: [AuthService, AuthGuardService , PartenaireService,RegisterService,PartenaireService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
