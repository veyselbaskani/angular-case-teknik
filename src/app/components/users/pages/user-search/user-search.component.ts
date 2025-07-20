import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/users';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent implements OnInit {
    users: User[] = [];
    searchText: string = '';

    constructor(
        private userService: UsersService,
        private router: Router,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.loadUsers();
    }

    filteredUsers(): User[] {
        return this.users.filter((user) =>
            user.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
    }

    goToDetail(user: User) {
        this.router.navigate(['/users', user.id], {
            state: { user },
        });
    }

    loadUsers(): void {
        this.userService.getUsers().subscribe(
            (data: User[]) => {
                this.users = data;
            },
            (error) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Hata',
                    detail: 'Kullanıcılar yüklenemedi',
                });
            }
        );
    }
}
