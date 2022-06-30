import { Entity } from '../../shared/Entity';

type UserProps = {
  id?: string;
  name: string;
  email: string;
  password: string;
  birthday: Date;
};

class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: string) {
    super(props, id);
  }

  static create(props: UserProps, id?: string) {
    const user = new User(props, id);

    return user;
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get birthday() {
    return this.props.birthday;
  }

  valueOf() {
    return {
      ...(this.id && { id: this.id }),
      ...this.props,
    };
  }
}

export { User, UserProps };
