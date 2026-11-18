import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';


@Component({
  imports: [],
  standalone: true,
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})

export class Projects {
  projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my projects and skills.',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/danieldiaz98/my-portfolio'
    },
    {
      title: 'EcoFire API',
      description: 'REST API that calculates the forest fire risk index in the Canary Islands.',
      technologies: ['Python', 'FastAPI', 'Pydantic', 'Pytest'],
      githubUrl: 'https://github.com/danieldiaz98/EcoFireApi'
    },
    {
      title: 'Waver',
      description: 'Web and Android application for the surfing community: discover spots, check weather conditions, share photos, follow other users and trade gear in a marketplace.',
      technologies: ['React', 'Vite', 'Capacitor', 'Supabase', 'Google Maps API', 'Stormglass API'],
      githubUrl: 'https://github.com/danieldiaz98/Waver'
    },
    {
      title: 'DeliYou',
      description: 'Android food-ordering app built in Kotlin: browse restaurants, explore menus, manage a shopping cart and save favourites.',
      technologies: ['Kotlin', 'Android', 'Firebase Auth', 'Firestore', 'SQLite', 'Picasso'],
      githubUrl: 'https://github.com/danieldiaz98/DeliYou'
    }
  ]
}
