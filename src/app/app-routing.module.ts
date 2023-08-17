import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
