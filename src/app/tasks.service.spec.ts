import { TestBed } from '@angular/core/testing';
import { TasksService } from './tasks.service';
import { Task } from './task';

describe('TaskServiceService', () => {
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update Tasks lists on addTask(task) call', () => {
    let receivedTask: Task;
    service.tasks$.subscribe(tasks => { receivedTask = tasks[tasks.length - 1]; });

    expect(service.tasks.length).toBe(2, 'service.tasks failed to initialize with correct number of tasks');
    service.addTask(new Task(
      3,
      'Sample Task 3',
      new Date('05-10-2021'),
      'High',
      'I\'m the third task!'
    ));
    expect(service.tasks[service.tasks.length - 1]).toBe(receivedTask, 'service.tasks$ failed to send along newly added task');
  });

  it('should collect all Tasks on getTasks() call', () => {
    expect(service.getTasks().length).toBe(2, 'service.getTasks() failed to initially collect all tasks');
    service.addTask(new Task(
      3,
      'Sample Task 3',
      new Date('05-10-2021'),
      'High',
      'I\'m the third task!'
    ));
    expect(service.getTasks().length).toBe(3, 'service.getTasks() failed to grab all tasks after a new task was added');
  });

  it('should edit Task matching provided task on editTask(task) call', () => {
    const taskToEdit = new Task(
      2,
      'Sample Task 3',
      new Date('05-10-2021'),
      'High',
      'I\'m the new description of the third task!'
    );
    service.editTask(taskToEdit);
    expect(service.tasks[1]).toBe(taskToEdit, 'service.editTask(task) failed to update the task list with the edited task');
  });

  it('should delete Task matching provided task id on deleteTask(id) call', () => {
    expect(service.tasks.find(task => task.id === 2 )).not.toBe(undefined, 'task with id 2 not found when it should exist');
    service.deleteTask(2);
    expect(service.tasks.find(task => task.id === 2 )).toBe(undefined, 'task with id of 2 remains when it should have been deleted');
  });

  it('should sort service.tasks based on date', () => {
    service.addTask(new Task(
      3,
      'Sample Task 3',
      new Date('04-1-2021'),
      'High',
      'I\'m the task due the earliest!'
    ));
    service.addTask(new Task(
      4,
      'Sample Task 4',
      new Date('04-2-2021'),
      'High',
      'I\'m the task due the earliest!'
    ));
    service.sortByDate();
    expect(service.tasks[0].id).toBe(3, 'the list is not correctly sorted by date; id 3 should be first');
    expect(service.tasks[1].id).toBe(4, 'the list is not correctly sorted by date; id 4 should be second');
  });

  it('should sort service.tasks based on priority', () => {
    service.addTask(new Task(
      3,
      'Sample Task 3',
      new Date('04-1-2021'),
      'High',
      'I\'m the task with the highest priority!'
    ));
    service.sortByDate();
    expect(service.tasks[0].priority).toBe('High', 'the list is not correctly sorted by priority; \'High\' priority should be first');
  });
});
