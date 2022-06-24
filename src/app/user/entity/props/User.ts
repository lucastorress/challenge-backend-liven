interface UserProps {
  id?: string;
  name: string;
  email: string;
  password: string;
  birthday: Date;
  address?: string[];
}

export default class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  birthday: Date;
  address?: string[];

  constructor(props: UserProps) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.birthday = props.birthday;
    this.address = props.address;
  }
}
