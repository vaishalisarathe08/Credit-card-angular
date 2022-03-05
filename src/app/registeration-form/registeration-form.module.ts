import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RegisterationFormRoutingModule } from './registeration-form-routing.module';
import { RegisterationFormComponent } from './registeration-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {MatFormFieldModule} from '@angular/material/form-field';
import { ItemOutputComponent } from './item-output/item-output.component';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [
    RegisterationFormComponent,
    ItemOutputComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    FlexLayoutModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RegisterationFormRoutingModule
  ],
  // entryComponents:[CardViewComponent],
 
  // schemas: [NO_ERRORS_SCHEMA]
})
export class RegisterationFormModule { }
