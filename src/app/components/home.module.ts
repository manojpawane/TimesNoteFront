import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { SideNavTogglerComponent } from './side-nav-toggler/side-nav-toggler.component';
import { NotesComponent } from './notes/notes.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { CreateNotesComponent } from './create-notes/create-notes.component';

@NgModule({
    imports: [CommonModule, FormsModule, HomeRoutingModule],
    exports: [],
    declarations: [DashboardComponent, NavbarComponent,
        SidenavbarComponent,
        SideNavTogglerComponent, NotesComponent, DisplayNotesComponent, CreateNotesComponent],
        bootstrap:[DashboardComponent]
})

export class HomeModule {

}