export class Task {

  constructor(
    public id: number,
    public title: string,
    public dueDate: Date,
    public priority: string,
    public description: string
  ) {}
}
