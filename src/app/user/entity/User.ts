import { Entity } from '../../shared/Entity';
import validateEmail from './helpers/validateEmail';

type UserProps = {
  id?: string;
  name: string;
  email: string;
  password: string;
  birthday: Date;
  address?: string[];
};

class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: string) {
    super(props, id);
  }

  get email() {
    return this.props.email;
  }

  static create(props: UserProps, id?: string) {
    const isValidEmail = validateEmail(props.email);

    if (!isValidEmail) {
      throw new Error('E-mail inválido.');
    }

    const user = new User(props, id);

    return user;
  }
}

export { User, UserProps };
