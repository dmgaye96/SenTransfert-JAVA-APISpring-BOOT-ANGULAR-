import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
//import { FormsComponent } from './pages/forms/forms.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { DepotComponent } from './depot/depot.component';
import { EnvoiComponent } from './envoi/envoi.component';
import { AdduserComponent } from './adduser/adduser.component';
import { RetraitComponent } from './retrait/retrait.component';
import { AddpartenaireComponent } from './addpartenaire/addpartenaire.component';
import { ListepartenaireComponent } from './listepartenaire/listepartenaire.component';
import { AddcompteComponent } from './addcompte/addcompte.component';
import { AddpartanduserComponent } from './addpartanduser/addpartanduser.component';
import { ComptespartnaireComponent } from './comptespartnaire/comptespartnaire.component';
import { UserpartenaireComponent } from './userpartenaire/userpartenaire.component';
import { CompteuserComponent } from './compteuser/compteuser.component';
import { RembousementComponent } from './rembousement/rembousement.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ContratComponent } from './contrat/contrat.component';
import { AloueruncompteComponent } from './aloueruncompte/aloueruncompte.component';



const routes: Routes = [

  { path: 'dashboard', canActivate: [AuthGuardService], component: DashboardComponent},
 // { path: 'forms', canActivate: [AuthGuardService], component: FormsComponent},
  { path: 'tables',canActivate: [AuthGuardService] , component: TablesComponent},
  { path: 'typography', canActivate: [AuthGuardService], component: TypographyComponent},
  { path: 'maps', component: MapsComponent},
  { path: 'notifications', canActivate: [AuthGuardService], component: NotificationsComponent},
  { path: 'auth/signup',  component:  SignupComponent },
  { path: 'auth/signin', component:  SigninComponent},
  { path: 'depot' ,canActivate: [AuthGuardService], component: DepotComponent },
  { path: 'register', canActivate: [AuthGuardService], component : RegisterComponent },
  { path: 'envoi', canActivate: [AuthGuardService],component : EnvoiComponent},
  { path: 'retrait' , canActivate: [AuthGuardService], component : RetraitComponent},
  { path: 'adduser' , canActivate: [AuthGuardService], component : AdduserComponent},
  { path: 'listepartenaire' , canActivate: [AuthGuardService], component : ListepartenaireComponent },
  { path: 'addcompte' ,canActivate: [AuthGuardService],component:AddcompteComponent},
  { path: 'addpartenaire' , canActivate: [AuthGuardService],component: AddpartenaireComponent},
  { path: 'comptespartnaire', component:ComptespartnaireComponent,canActivate: [AuthGuardService]},
  { path:  'addpartanduser' , component:AddpartanduserComponent,canActivate: [AuthGuardService]},
  { path: 'userpartenaire' ,component:UserpartenaireComponent,canActivate: [AuthGuardService] },
  { path: 'compteuser', component:CompteuserComponent ,canActivate: [AuthGuardService] },
  { path: 'rembousement' , component:RembousementComponent ,canActivate: [AuthGuardService]},
  { path: 'transactions' ,component:TransactionsComponent , canActivate: [AuthGuardService] },
  { path: 'contrat' , component:ContratComponent ,canActivate: [AuthGuardService]},
  { path: 'aloueruncompte' ,component:AloueruncompteComponent ,canActivate: [AuthGuardService]},
  { path: '**' , redirectTo: 'auth/signin' , pathMatch: 'full'},
  { path: '', redirectTo: 'auth/signin' , pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
