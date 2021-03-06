import {
    Directive,
    ModuleWithProviders,
    NgModule,
    Pipe,
    Provider
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@dr-shared/components';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const sharedModules: any[] = [
    RouterModule,
    CommonModule,
    CKEditorModule
];

const sharedComponents: any[] = [
    HeaderComponent
];

const sharedDirectives: Directive[] = [];

const sharedServices: Provider[] = [];

const sharedPipes: Pipe[] = [];

@NgModule({
    imports: [
        ...sharedModules
    ],
    declarations: [
        ...sharedComponents,
        ...sharedDirectives,
        ...sharedPipes
    ],
    exports: [
        ...sharedModules,
        ...sharedComponents,
        ...sharedDirectives,
        ...sharedPipes
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ...sharedServices
            ]
        };
    }
}
