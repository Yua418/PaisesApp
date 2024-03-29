import { NgModule } from  "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PorCapitalComponent } from "./paises/pages/por-capital/por-capital.component";
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes:Routes = [
  {
    path: "",
    component: PorPaisComponent,
    pathMatch: "full"
  },
  {
    path: "region",
    component: PorRegionComponent,
  },
  {
    path: "capital",
    component: PorCapitalComponent,
  },
  {
    path: "pais/:id",
    component: VerPaisComponent,
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // For Root es para rutas padre
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
