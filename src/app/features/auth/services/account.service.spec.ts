import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should logout', () => {
    // const subject = service['loggedInUserSubject$'];
    // const subjectSpy = spyOn(subject, 'next');
    const routerSpy = spyOn(service['router'], 'navigateByUrl');

    service.logout();

    // expect(subjectSpy).toHaveBeenCalledOnceWith(null);
    expect(routerSpy).toHaveBeenCalledWith(
      '/login',
      Object({ skipLocationChange: false })
    );
  });
});
