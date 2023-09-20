import { Component, Input } from '@angular/core';

interface leadersDetails {
  leaderImgSrc:string;
  leaderName:string;
  leaderPost:string;
}

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.scss']
})
export class LeadersComponent {

  @Input() leaders: leadersDetails[] = []

}
