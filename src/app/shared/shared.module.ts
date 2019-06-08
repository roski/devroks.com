import {
    Directive,
    ModuleWithProviders,
    NgModule,
    Pipe,
    Provider
} from '@angular/core';
import { CommonModule } from '@angular/common';

const sharedModules: any[] = [
    CommonModule
];

const sharedComponents: any[] = [];

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
