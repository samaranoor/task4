import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSelectorComponent } from './user-selector/user-selector.component';
import { QuestionFormComponent } from './question-form/question-form.component';
const routes: Routes = [
  { path: '', component: UserSelectorComponent },
  { path: 'question', component: QuestionFormComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
