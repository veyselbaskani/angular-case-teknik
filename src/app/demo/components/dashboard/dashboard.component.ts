import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { User } from './models/users';
import { UsersService } from './services/users.service';

@Component({
    templateUrl: './dashboard.component.html',
    styles: [
        `
            p-image {
                padding: 10px;
            }

            .error-message {
                color: red;
                margin-top: 10px;
            }

            .right-section {
                justify-content: flex-end;
            }
        `,
    ],
})
export class DashboardComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UsersService) {}

    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers(): void {
        this.userService.getUsers().subscribe(
            (data: User[]) => {
                console.log('Users loaded successfully:', data);
                this.users = data;
            },
            (error) => {
                console.error('Error loading users', error);
            }
        );
    }
}
