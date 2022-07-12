import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]/*,
    //En los imports solo van modules
    imports: [
        CommonModule
    ]*/
})
export class ContadorModule {

}