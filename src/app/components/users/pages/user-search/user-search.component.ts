import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/users';

@Component({
    selector: 'app-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent implements OnInit {
    users: User[] = [];
    searchText: string = '';
    loading: boolean = false;

    constructor(private userService: UsersService) {}

    ngOnInit(): void {
        this.loadUsers();
    }

    filteredUsers(): User[] {
        return this.users.filter((user) =>
            user.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
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
