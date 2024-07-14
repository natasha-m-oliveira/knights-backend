import { Attribute, Weapon } from './weapon';

export type Attributes = Record<Attribute, number>;

type KnightProps = {
  name: string;
  nickname: string;
  birthday: Date;
  weapons: Weapon[];
  attributes: Attributes;
  keyAttribute: Attribute;
};

export class Knight {
  private props: Required<KnightProps>;

  constructor(props: KnightProps) {
    this.props = {
      name: props.name,
      nickname: props.nickname,
      birthday: props.birthday,
      weapons: props.weapons,
      attributes: props.attributes,
      keyAttribute: props.keyAttribute,
    };
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get nickname() {
    return this.props.nickname;
  }

  public set nickname(nickname: string) {
    this.props.nickname = nickname;
  }

  public get birthday() {
    return this.props.birthday;
  }

  public set birthday(birthday: Date) {
    this.props.birthday = birthday;
  }

  public get weapons() {
    return this.props.weapons;
  }

  public set weapons(weapons: Weapon[]) {
    this.props.weapons = weapons;
  }

  public get attributes() {
    return this.props.attributes;
  }

  public set attributes(attributes: Attributes) {
    this.props.attributes = attributes;
  }

  public get keyAttribute() {
    return this.props.keyAttribute;
  }

  public set keyAttribute(keyAttribute: Attribute) {
    this.props.keyAttribute = keyAttribute;
  }
}
