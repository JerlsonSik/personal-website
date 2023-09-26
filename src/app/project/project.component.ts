import { Component } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent {
  project: Project[] = [{
    id: 0,
    name: 'Research Website',
    summary: "A survey website that could take survey and manipulate user spotify data to provide enough insight for a reserach.",
    description: '',
    projectLink: '',
    tags: [Tag.REACT, Tag.TYPESCRIPT],
    pictures:[]
  },
  {
    id: 1,
    name: 'Automobile Windows Application',
    summary: "A window application to manage file system for an automobile company by doing an internship.",
    description: '',
    projectLink: '',
    tags: [Tag.CSHARP, Tag.MySQL],
    pictures:[]
  },
  {
    id: 3,
    name: 'Cryptocurrency Quantifying Trading Strategy',
    summary: "A 24/7 trading system that could manage order by getting realtime stock data and analyzing based on developed strategy.  ",
    description: '',
    projectLink: '',
    tags: [Tag.PYTHON, Tag.AWS],
    pictures:[]
  },
  {
    id: 4,
    name: 'Solar Racing',
    summary: "Simulate the energy power generated according to location, time, sun angle to get the best result for solar panel.",
    description: '',
    projectLink: '',
    tags: [Tag.PYTHON, Tag.API],
    pictures:[]
  },
  {
    id: 5,
    name: 'Personal Website',
    summary: "Portfolio website to shows my personal project and experience together with more information about me.",
    description: '',
    projectLink: '',
    tags: [Tag.ANGULAR, Tag.Bootstrap],
    pictures:[]
  },
  ]
}
