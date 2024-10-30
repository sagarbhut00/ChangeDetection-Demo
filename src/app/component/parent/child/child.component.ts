import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SharedService],
})
export class ChildComponent {
  @Input() data!: { message: string };
  childData: string = 'Child Component Data';
  childServiceData!: string;

  constructor(private sharedService: SharedService) {
    this.childServiceData = this.sharedService.getData();
  }

  updateChildData() {
    this.childData = 'Updated Child Data';
  }

  updateServiceData() {
    this.sharedService.setData('Updated by Child');
    this.childServiceData = this.sharedService.getData();
  }

  getServiceData() {
    this.childServiceData = this.sharedService.getData();
  }
}
