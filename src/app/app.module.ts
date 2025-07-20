import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/layout/app.layout.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersService } from './components/users/services/users.service';
import { MessageService } from 'primeng/api';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        UsersService,
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
