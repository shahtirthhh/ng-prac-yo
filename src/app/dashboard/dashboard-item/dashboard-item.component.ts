import { Component, input } from '@angular/core';

export type ImageType = {
  src: string;
  alt: string;
};
@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  // @Input({ required: true }) image!: ImageType;
  // @Input({ required: true }) title!: string;

  image = input.required<ImageType>();
  title = input.required<string>();
}
