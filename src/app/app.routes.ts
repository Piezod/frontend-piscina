import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio';
import { AbonadosComponents } from './pages/abonados/abonados';

export const routes: Routes = [
    {path: '',
    component: InicioComponent},
     {
    path: 'abonados',
    component: AbonadosComponents
  }
];
