import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink,NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: 'Web Development',
      description: 'Create modern, responsive, and scalable web applications.',
      icon: 'bi-code-slash',
      link: '/services/web-development'
    },
    {
      title: 'Mobile App Development',
      description: 'Build mobile apps that deliver seamless user experiences.',
      icon: 'bi-phone',
      link: '/services/mobile-app-development'
    },
    {
      title: 'UI/UX Design',
      description: 'Design stunning and user-friendly interfaces.',
      icon: 'bi-palette',
      link: '/services/ui-ux-design'
    },
    {
      title: 'SEO Optimization',
      description: 'Boost your online presence with our SEO strategies.',
      icon: 'bi-bar-chart',
      link: '/services/seo-optimization'
    },
    {
      title: 'Cloud Solutions',
      description: 'Leverage the power of cloud to enhance productivity.',
      icon: 'bi-cloud',
      link: '/services/cloud-solutions'
    },
    {
      title: 'AI & ML Services',
      description: 'Integrate AI & ML for smarter business solutions.',
      icon: 'bi-robot',
      link: '/services/ai-ml-services'
    }
  ];
}
