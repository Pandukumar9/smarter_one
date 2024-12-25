import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  imports: [NgClass,NgFor,NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  totalOrders = 120;
  totalRevenue = 56000;
  activeUsers = 45;
  pendingOrders = 12;

  recentOrders = [
    { customer: 'John Doe', items: ['Dosa', 'Idly'], total: 150, status: 'Completed', date: '2024-12-24' },
    { customer: 'Jane Smith', items: ['Pizza'], total: 350, status: 'Pending', date: '2024-12-23' },
    { customer: 'Emily Johnson', items: ['Burger', 'Fries'], total: 220, status: 'Cancelled', date: '2024-12-22' },
  ];

  ngOnInit(): void {
    Chart.register(...registerables);

    this.createChart('ordersChart', ['Jan', 'Feb', 'Mar', 'Apr'], [50, 70, 90, 120], 'Orders');
    this.createChart('revenueChart', ['Jan', 'Feb', 'Mar', 'Apr'], [15000, 20000, 25000, 56000], 'Revenue');
  }

  createChart(canvasId: string, labels: string[], data: number[], label: string): void {
    new Chart(canvasId, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label,
            data,
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}
