import { Entity } from '../../shared/Entity';

type AddressProps = {
  id?: string;
  userId: string;
  zipCode: string;
  address: string;
  complement: string;
  state: string;
  city: string;
  country: string;
};

class Address extends Entity<AddressProps> {
  private constructor(props: AddressProps, id?: string) {
    super(props, id);
  }

  static create(props: AddressProps, id?: string) {
    const user = new Address(props, id);

    return user;
  }

  get userId() {
    return this.props.userId;
  }

  get zipCode() {
    return this.props.zipCode;
  }

  get address() {
    return this.props.address;
  }

  get complement() {
    return this.props.complement;
  }

  get state() {
    return this.props.state;
  }

  get city() {
    return this.props.city;
  }

  get country() {
    return this.props.country;
  }

  valueOf() {
    return {
      ...(this.id && { id: this.id }),
      ...this.props,
    };
  }
}

export { Address, AddressProps };
