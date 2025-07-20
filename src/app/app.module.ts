import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { UsersService } from './demo/components/dashboard/services/users.service';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        UsersService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
