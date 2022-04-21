import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, Routes } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "scorecard", component: ScorecardComponent },
  { path: "**", component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
