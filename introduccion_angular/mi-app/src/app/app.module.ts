import { NgModule } from "@angular/core";
import { PersonasComponent } from "./personas/personas.component";
import { PersonaComponent } from "./persona/persona.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [PersonasComponent, PersonaComponent],
    exports: [PersonasComponent, PersonaComponent, FormsModule, CommonModule],
    imports: [FormsModule, CommonModule],
    providers: []
})

export class AppModule {

}