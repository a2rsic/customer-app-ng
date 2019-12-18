import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [],
    imports: [
        MatProgressSpinnerModule,
        MatTooltipModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatDividerModule,
        MatListModule
    ],
    exports: [
        MatProgressSpinnerModule,
        MatTooltipModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatDividerModule,
        MatListModule
    ]
})
export class CommonModule { }
