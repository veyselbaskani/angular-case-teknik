import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UserSearchComponent },
        { path: 'users/:id', component: UserDetailComponent }
    ])],
    exports: [RouterModule]
})
export class UserRotingModule { }
