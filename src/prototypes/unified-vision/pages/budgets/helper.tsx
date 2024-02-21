import { Task } from "gantt-task-react";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
        start: new Date(currentDate.getFullYear(), 1, 1),
        end: new Date(currentDate.getFullYear(), 3, 31),
        name: "Hot Sandwiches",
        id: "HotSandwiches",
        progress: 25,
        type: "project",
        hideChildren: false,
        displayOrder: 1,
        isDisabled: true,
    },
    {
      start: new Date(currentDate.getFullYear(), 1, 15),
      end: new Date(
        currentDate.getFullYear(),
        2,
        28,
        0,
        0
      ),
      name: "Foot Long Campaign 2023",
      id: "111",
      progress: 100,
      type: "task",
      project: "HotSandwiches",
      displayOrder: 2,
      isDisabled: true,
    },
    {
      start: new Date(currentDate.getFullYear(), 3, 1),
      end: new Date(currentDate.getFullYear(), 4, 1, 0, 0),
      name: "Hot Sandwiches Campaign",
      id: "Task 1",
      progress: 85,
    //   dependencies: ["Task 0"],
      type: "task",
      project: "HotSandwiches",
      displayOrder: 3,
      isDisabled: true,
    },
    {
        start: new Date(currentDate.getFullYear(), 5, 1),
        end: new Date(currentDate.getFullYear(), 8, 31),
        name: "Specialty Sandwiches",
        id: "SpecialtySandwiches",
        progress: 25,
        type: "project",
        hideChildren: false,
        displayOrder: 4,
      },
    {
      start: new Date(currentDate.getFullYear(), 5, 1),
      end: new Date(currentDate.getFullYear(), 7, 31, 0, 0),
      name: "Specialty Campaign 1",
      id: "Task 2",
      progress: 75,
    //   dependencies: ["Task 1"],
      type: "task",
      project: "SpecialtySandwiches",
      displayOrder: 5,
      isDisabled: true,
    },
    {
      start: new Date(currentDate.getFullYear(), 8, 1),
      end: new Date(currentDate.getFullYear(), 8, 31, 0, 0),
      name: "Specialty Campaign Q3",
      id: "Task 3",
      progress: 10,
    //   dependencies: ["Task 2"],
      type: "task",
      project: "SpecialtySandwiches",
      displayOrder: 6,
      isDisabled: true,
    },
    {
        start: new Date(currentDate.getFullYear(), 7, 1),
        end: new Date(currentDate.getFullYear(), 9, 30),
        name: "Seasonal Campaigns",
        id: "Seasonal",
        progress: 25,
        type: "project",
        hideChildren: false,
        displayOrder: 7,
        isDisabled: true,
      },
    {
      start: new Date(currentDate.getFullYear(), 7, 1),
      end: new Date(currentDate.getFullYear(), 9, 30),
      name: "Seasonal Campaign 1",
      id: "Task 4",
      type: "task",
      progress: 20,
    //   dependencies: ["Task 2"],
      project: "Seasonal",
      displayOrder: 8,
      isDisabled: true,
    },
    {
      start: new Date(currentDate.getFullYear(), 8, 1),
      end: new Date(currentDate.getFullYear(), 9, 30),
      name: "Seasonal Campaign 2",
      id: "Task 4",
      type: "task",
      progress: 5,
    //   dependencies: ["Task 2"],
      project: "Seasonal",
      displayOrder: 8,
      isDisabled: true,
    },
  ];
  return tasks;
}
export function initGMTasks() {
  const currentDate = new Date();
  const GMTasks: Task[] = [
    {
        start: new Date(currentDate.getFullYear(), 1, 1),
        end: new Date(currentDate.getFullYear(), 3, 31),
        name: "Electronic Vehicles",
        id: "ElectronicVehicles",
        progress: 25,
        type: "project",
        hideChildren: false,
        displayOrder: 1,
        isDisabled: true,
    },
    {
      start: new Date(currentDate.getFullYear(), 1, 15),
      end: new Date(
        currentDate.getFullYear(),
        2,
        28,
        0,
        0
      ),
      name: "EV Campaign 2023",
      id: "111",
      progress: 100,
      type: "task",
      project: "ElectronicVehicles",
      displayOrder: 2,
      isDisabled: true,
    },
    {
      start: new Date(currentDate.getFullYear(), 3, 1),
      end: new Date(currentDate.getFullYear(), 4, 1, 0, 0),
      name: "EV Campaign March",
      id: "Task 1",
      progress: 85,
    //   dependencies: ["Task 0"],
      type: "task",
      project: "ElectronicVehicles",
      displayOrder: 3,
      isDisabled: true,
    },
    {
        start: new Date(currentDate.getFullYear(), 5, 1),
        end: new Date(currentDate.getFullYear(), 8, 31),
        name: "SUV Campaigns",
        id: "SUV",
        progress: 25,
        type: "project",
        hideChildren: false,
        displayOrder: 4,
      },
    {
      start: new Date(currentDate.getFullYear(), 5, 1),
      end: new Date(currentDate.getFullYear(), 7, 31, 0, 0),
      name: "SUV Campaign 1",
      id: "Task 2",
      progress: 75,
    //   dependencies: ["Task 1"],
      type: "task",
      project: "SUV",
      displayOrder: 5,
      isDisabled: true,
    },
    {
      start: new Date(currentDate.getFullYear(), 8, 1),
      end: new Date(currentDate.getFullYear(), 8, 31, 0, 0),
      name: "SUVCampaign 2",
      id: "Task 3",
      progress: 10,
    //   dependencies: ["Task 2"],
      type: "task",
      project: "SUV",
      displayOrder: 6,
      isDisabled: true,
    },
    {
        start: new Date(currentDate.getFullYear(), 7, 1),
        end: new Date(currentDate.getFullYear(), 9, 30),
        name: "General Media Campaigns",
        id: "General",
        progress: 25,
        type: "project",
        hideChildren: false,
        displayOrder: 7,
        isDisabled: true,
      },
    {
      start: new Date(currentDate.getFullYear(), 7, 1),
      end: new Date(currentDate.getFullYear(), 9, 30),
      name: "General Media Campaign 1",
      id: "Task 4",
      type: "task",
      progress: 20,
    //   dependencies: ["Task 2"],
      project: "General",
      displayOrder: 8,
      isDisabled: true,
    },
    {
      start: new Date(currentDate.getFullYear(), 8, 1),
      end: new Date(currentDate.getFullYear(), 9, 30),
      name: "General Media Campaign 2",
      id: "Task 4",
      type: "task",
      progress: 5,
    //   dependencies: ["Task 2"],
      project: "General",
      displayOrder: 8,
      isDisabled: true,
    },
  ];
  return GMTasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}