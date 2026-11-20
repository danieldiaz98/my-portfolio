import { Component } from '@angular/core';
import { Projects } from '../projects/projects';

@Component({
  imports: [Projects],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
