import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { LayoutHomeComponent } from './home/pages/layout.component';
import { LayoutAboutComponent } from './about/pages/layout/layout.component';
import { LayoutServicesComponent } from './servicesCorporation/layout-services/layout-services.component';
import { LayoutsProductsComponent } from './products/layouts-products/layouts-products.component';


import { GlassSaleComponent } from './products/components/glass-sale/glass-sale.component';
import { HdpeTeeYeeSaleComponent } from './products/components/hdpe-tee-yee-sale/hdpe-tee-yee-sale.component';
import { PipelineSaleComponent } from './products/components/pipeline-sale/pipeline-sale.component';
import { CordSaleComponent } from './products/components/cord-sale/cord-sale.component';
import { ElectedGroupRentalComponent } from './products/components/elected-group-rental/elected-group-rental.component';
import { CradleRentalComponent } from './products/components/cradle-rental/cradle-rental.component';
import { ExtrudersRentalComponent } from './products/components/extruders-rental/extruders-rental.component';
import { HotMelterHydraulicRentalComponent } from './products/components/hot-melter-hydraulic-rental/hot-melter-hydraulic-rental.component';
import { HotMelterManualRentalComponent } from './products/components/hot-melter-manual-rental/hot-melter-manual-rental.component';
import { ControlEquipmentRentalComponent } from './products/components/control-equipment-rental/control-equipment-rental.component';
import { MiningSectorComponent } from './projects/components/mining-sector/mining-sector.component';


import { HydrocarbonsSectorComponent } from './projects/components/hydrocarbons-sector/hydrocarbons-sector.component';
import { AgriculturalSectorComponent } from './projects/components/agricultural-sector/agricultural-sector.component';
import { ConstructionSectorComponent } from './projects/components/construction-sector/construction-sector.component';
import { ProyectsLayoutsComponent } from './projects/proyects-layouts/proyects-layouts.component';
import { LayoutPagesComponent } from './clients/pages/layout-pages.component';
import { LayoutWorkWithComponent } from './workWithUs/pages/layout-work-with.component';



export const routes: Routes = [
  {
    path:'',
    component: LayoutsComponent,
    children: [
      { path: 'inicio', component: LayoutHomeComponent },
      { path: 'nosotros', component: LayoutAboutComponent },
      { path: 'servicios', component: LayoutServicesComponent },
      { path: 'productos',
        component: LayoutsProductsComponent,
        children:[
          {path:'venta-fabricacion-de-fibra-vidrio',component:GlassSaleComponent},
          {path:'venta-hdpe-tee-yee',component:HdpeTeeYeeSaleComponent},
          {path:'venta-fabricacion-tuberia-hdpe',component:PipelineSaleComponent},
          {path:'venta-fabricacion-cordon-geomenbrana',component:CordSaleComponent},
          {path:'alquiler-grupo-electrogeno',component:ElectedGroupRentalComponent},
          {path:'alquiler-de-cuña',component:CradleRentalComponent},
          {path:'alquiler-de-extrusoras',component:ExtrudersRentalComponent},
          {path:'alquiler-termofusora-hidráulica',component:HotMelterHydraulicRentalComponent},
          {path:'alquiler-termofusora-manual',component:HotMelterManualRentalComponent},
          {path:'alquiler-equipos-control-calidad',component:ControlEquipmentRentalComponent},
          {path:'**', redirectTo:'venta-fabricacion-de-fibra-vidrio', pathMatch:'full'}
        ]
       },
      { path: 'proyectos',
        component: ProyectsLayoutsComponent,
        children:[
          {path:'sector-mineria',component:MiningSectorComponent},
          {path:'sector-hidrocarburos',component:HydrocarbonsSectorComponent},
          {path:'sector-agricultura',component:AgriculturalSectorComponent},
          {path:'sector-construccion',component:ConstructionSectorComponent},

          {path:'**', redirectTo:'sector-mineria', pathMatch:'full'}
        ]
      },
      { path: 'clientes', component: LayoutPagesComponent },
      { path: 'trabaja-con-nosotros', component: LayoutWorkWithComponent },
      {path:'**',redirectTo:'/inicio',pathMatch:'full'}
    ]
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  }
];
