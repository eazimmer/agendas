export class Task {

  constructor(
    public id: number,
    public title: string,
    public dueDate: Date,
    public severity: string,
    public description: string
  ) {}
}
