import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesComponent } from './notes/notes.component';

const HomeRoutes: Routes = [{
    path: 'dashboard', component: NotesComponent
}]

@NgModule({
    imports: [RouterModule.forChild(HomeRoutes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {

}