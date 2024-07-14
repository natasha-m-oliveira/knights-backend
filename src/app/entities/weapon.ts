export type Attribute =
  | 'strength'
  | 'dexterity'
  | 'constitution'
  | 'intelligence'
  | 'wisdom'
  | 'charisma';

type WeaponProps = {
  name: string;
  mod: number;
  attr: Attribute;
  equipped: boolean;
};

export class Weapon {
  private props: Required<WeaponProps>;

  constructor(props: WeaponProps) {
    this.props = {
      name: props.name,
      mod: props.mod,
      attr: props.attr,
      equipped: props.equipped,
    };
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get mod() {
    return this.props.mod;
  }

  public set mod(mod: number) {
    this.props.mod = mod;
  }

  public get attr() {
    return this.props.attr;
  }

  public set attr(attr: Attribute) {
    this.props.attr = attr;
  }

  public get equipped() {
    return this.props.equipped;
  }

  public set equipped(equipped: boolean) {
    this.props.equipped = equipped;
  }
}
