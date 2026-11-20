import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; // Ajusta el nombre de la clase según cómo se generó
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: '**', redirectTo: '' }
];