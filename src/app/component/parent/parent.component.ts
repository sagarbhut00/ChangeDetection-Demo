import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [SharedService],
})
export class ParentComponent {
  name: string = 'Parent Component';
  nonPrimitiveData = { message: 'Initial Data' };
  parentServiceData!: string;

  constructor(private sharedService: SharedService) {
    this.parentServiceData = this.sharedService.getData();
  }

  updateName() {
    this.name = 'Updated Parent Component Name';
  }

  updateNonPrimitiveWithoutRef() {
    this.nonPrimitiveData.message = 'Updated Parent Message by without Ref.';
  }

  updateNonPrimitiveWithRef() {
    this.nonPrimitiveData = { message: 'Updated Parent Message by with Ref.' };
  }

  updateServiceData() {
    this.sharedService.setData('Updated by Parent');
    this.parentServiceData = this.sharedService.getData();
  }
}
