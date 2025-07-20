import { Component, OnInit } from '@angular/core';
import { User } from '../../models/users';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { interval } from 'rxjs';

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
        private usersService: UsersService
    ) {}

    ngOnInit(): void {
      interval(15000).subscribe(() => {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.usersService.getUserById(id).subscribe({
            next: (data) => {
                this.user = data;
                this.loading = false;
            },
            error: (err) => {
                console.error('Kullanıcı alınamadı', err);
                this.loading = false;
            },
        });
      });
    }

    goBack(): void {
        this.router.navigate(['/']);
    }
}
