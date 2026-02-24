import { Component, Input } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { Encounter } from '../../raid-models/raid-models';

@Component({
  selector: 'app-encounter-list',
  imports: [
    MatCard,
  ],
  templateUrl: './encounterlist.html',
  styleUrl: './encounterlist.css',
})
export class Encounterlist {

  @Input() encounters: Encounter[] = [];

  @Input() borderClass?: string;
}
