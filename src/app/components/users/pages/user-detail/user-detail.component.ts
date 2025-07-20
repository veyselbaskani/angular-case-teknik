import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { MessageService } from 'primeng/api';
import { interval, take } from 'rxjs';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
    user?: User;
    loading: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        const stateUser = history.state.user;
        if (stateUser) {
            this.user = stateUser;
            this.loading = false;
        } else {
            const id = Number(this.route.snapshot.paramMap.get('id'));
            this.usersService.getUserById(id).subscribe({
                next: (data) => {
                    this.user = data;
                    this.loading = false;
                },
                error: () => {
                    this.loading = false;
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Hata',
                        detail: 'Kullanıcı bulunamadı',
                    });
                    interval(5000)
                        .pipe(take(1))
                        .subscribe(() => {
                            this.router.navigate(['/']);
                        });
                },
            });
        }
    }

    goBack(): void {
        this.router.navigate(['/']);
    }
}
