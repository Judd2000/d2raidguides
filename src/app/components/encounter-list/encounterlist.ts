import { Component, Input } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { Encounter } from '../../raid-models/raid-models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-encounter-list',
  imports: [
    MatCard,
    RouterLink,
  ],
  templateUrl: './encounterlist.html',
  styleUrl: './encounterlist.css',
})
export class Encounterlist {

  @Input() isLarge = false;

  @Input() includeRating = false;

  @Input() encounters: Encounter[] = [];

  @Input() rdPath?: string;

  @Input() color?: string;

  ratings: number[] = [];

  getBorderClass = () => `border-${this.color}`;

  getImgSize = () => `w-${this.isLarge ? 15 : 10 }`;

  getTextSize = () => `text-${this.isLarge ? 'm' : 'xs' }`;

  getSpanClass = () => `${this.getTextSize()} active:text-blue-600 active:underline`;

  getImgClass = () => `${this.getImgSize()} rounded-full m-2`;

  constructor() {
    // TODO: Get Ratings for each
  }
}
