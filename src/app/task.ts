export class Task {
  private _id: number;
  private _title: string;
  private _dueDate: Date;
  private _severity: string;
  private _description: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get dueDate(): Date {
    return this._dueDate;
  }

  set dueDate(value: Date) {
    this._dueDate = value;
  }

  get severity(): string {
    return this._severity;
  }

  set severity(value: string) {
    this._severity = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  constructor(id: number, title: string, dueDate: Date, severity: string, description: string) {
    this._id = id;
    this._title = title;
    this._dueDate = dueDate;
    this._severity = severity;
    this._description = description;
  }
}
