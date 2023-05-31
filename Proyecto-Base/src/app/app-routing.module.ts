import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'validate-contact',
    loadChildren: () => import('./modules/validate-contac/validate-contac.module').then(m => m.ValidateContacModule)
  },
  {
    path: 'carrusel',
    loadChildren: () => import('./modules/carousel/carousel.module').then(m => m.CarouselModule)
  },
  {
    path: 'loadfiles',
    loadChildren: () => import('./modules/load-files/load-files.module').then(m => m.LoadFilesModule)
  },
  {
    path: 'tooltip',
    loadChildren: () => import('./modules/tooltip/tooltip.module').then(m => m.TooltipModule)
  },
  {
    path: 'paginator',
    loadChildren: () => import('./modules/paginator/paginator.module').then(m => m.PaginatorModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./modules/calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./modules/select/select.module').then(m => m.SelectModule)
  },
  {
    path: 'document',
    loadChildren: () => import('./modules/document/document.module').then(m => m.DocumentModule)
  },
  {
    path: 'category-document',
    loadChildren: () => import('./modules/category-document/category-document.module').then(m => m.CategoryDocumentModule)
  },
  {
    path: 'stepper',
    loadChildren: () => import('./modules/stepper/stepper.module').then(m => m.StepperModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
