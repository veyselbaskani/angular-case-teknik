import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { UserRotingModule } from './users-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PanelModule } from 'primeng/panel';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        UserRotingModule,
        CarouselModule,
        GalleriaModule,
        ImageModule,
        InputNumberModule,
        RippleModule,
        InputTextModule,
        ProgressSpinnerModule,
        PanelModule,
    ],
    declarations: [UserSearchComponent, UserDetailComponent],
})
export class UserModule {}
