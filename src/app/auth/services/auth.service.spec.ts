import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';


describe('AuthService', () => {
  let service: AuthService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve the created user on registerUser() success call', () => {
    const user: User = {
      email: 'test@user.com',
      lastName: 'Doe',
      firstName: 'john'
    };

    service.registerUser(user).subscribe((createdUser: User) => {
      expect(createdUser).toEqual(user);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: AuthService.URL,
    });

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(user);

    req.flush(user);
  });
});

