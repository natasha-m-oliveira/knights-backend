import { Knight } from './knight';

type LegacyProps = {
  id?: string;
  knight: Knight;
  deletedAt?: Date;
};

export class Legacy {
  private props: Required<LegacyProps>;

  constructor(props: LegacyProps) {
    this.props = {
      id: props.id ?? '',
      knight: props.knight,
      deletedAt: props.deletedAt ?? new Date(),
    };
  }

  public get id() {
    return this.props.id;
  }

  public set id(id: string) {
    this.props.id = id;
  }

  public get knight() {
    return this.props.knight;
  }

  public set knight(knight: Knight) {
    this.props.knight = knight;
  }
  public get deletedAt() {
    return this.props.deletedAt;
  }
}
