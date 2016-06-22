
const CURRENT = "12345";

export class PasswordService {

  checkCurrentPassword(password: string) :boolean {
    return password === CURRENT;
  }
}
