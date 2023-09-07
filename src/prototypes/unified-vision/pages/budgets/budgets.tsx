import React from 'react';
import { Button, ButtonTheme } from '@preamp/core';
import budgetScreenshot from '../../img/budgets-screenshot.png';
import { Task, ViewMode, Gantt } from 'gantt-task-react';
import { ViewSwitcher } from './viewer-switcher';
import { getStartEndDateForProject, initTasks } from "./helper";

import "gantt-task-react/dist/index.css";
const currentDate = new Date();
// const tasks: Task[] = [
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//       name: "Some Project",
//       id: "ProjectSample",
//       progress: 25,
//       type: "project",
//       hideChildren: false,
//       displayOrder: 1,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
//       end: new Date(
//         currentDate.getFullYear(),
//         currentDate.getMonth(),
//         2,
//         12,
//         28
//       ),
//       name: "Idea",
//       id: "Task 0",
//       progress: 45,
//       type: "task",
//       project: "ProjectSample",
//       displayOrder: 2,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
//       name: "Research",
//       id: "Task 1",
//       progress: 25,
//       dependencies: ["Task 0"],
//       type: "task",
//       project: "ProjectSample",
//       displayOrder: 3,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
//       name: "Discussion with team",
//       id: "Task 2",
//       progress: 10,
//       dependencies: ["Task 1"],
//       type: "task",
//       project: "ProjectSample",
//       displayOrder: 4,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
//       name: "Developing",
//       id: "Task 3",
//       progress: 2,
//       dependencies: ["Task 2"],
//       type: "task",
//       project: "ProjectSample",
//       displayOrder: 5,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
//       name: "Review",
//       id: "Task 4",
//       type: "task",
//       progress: 70,
//       dependencies: ["Task 2"],
//       project: "ProjectSample",
//       displayOrder: 6,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//       name: "Release",
//       id: "Task 6",
//       progress: currentDate.getMonth(),
//       type: "milestone",
//       dependencies: ["Task 4"],
//       project: "ProjectSample",
//       displayOrder: 7,
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
//       name: "Party Time",
//       id: "Task 9",
//       progress: 0,
//       isDisabled: true,
//       type: "task",
//     },
//   ];
// let tasks: Task[] = [
//     {
//       start: new Date(2020, 1, 1),
//       end: new Date(2020, 1, 2),
//       name: 'Idea',
//       id: 'Task 0',
//       type:'task',
//       progress: 45,
//       isDisabled: true,
//       styles: { progressColor: 'var(--va-teal-300', progressSelectedColor: '#ff9e0d' },
//     },
//     {
//         start: new Date(2020, 1, 5),
//         end: new Date(2020, 1, 10),
//         name: 'Idea',
//         id: 'Task 0',
//         type:'task',
//         progress: 45,
//         isDisabled: true,
//         styles: { progressColor: 'var(--va-teal-300', progressSelectedColor: '#ff9e0d' },
//     },

//     {
//         start: new Date(2020, 4, 5),
//         end: new Date(2020, 4, 10),
//         name: 'Idea',
//         id: 'Task 0',
//         type:'task',
//         progress: 45,
//         isDisabled: true,
//         styles: { progressColor: 'var(--va-teal-300', progressSelectedColor: '#ff9e0d' },
//     },
    
// ];
// interface ITaskListColumn {
//     rowHeight: number;
//     rowWidth: string;
//     fontFamily: string;
//     fontSize: string;
//     locale: string;
//     tasks: Task[];
//     selectedTaskId: string;
//     setSelectedTask: (taskId: string) => void;
//   }
// interface ITaskListHeader {
//     headerHeight: number;
//     rowWidth: string;
//     fontFamily: string;
//     fontSize: string;
// }
  
// const TaskListHeader: React.FC<ITaskListHeader> = () => {
//     return (
//         <div className='list-header' style={{ width: 500, marginTop: 6 }}>
//         <div className='list-col-name'>Budget:</div>
//         <div className='list-col-status'>ID:</div>
//         <div className='list-col-status'>Budget Amount</div>
//         <div></div>
//         </div>
//     );
// };
  
// const TaskListColumn: React.FC<ITaskListColumn> = ({ tasks }) => {
//     return (
//         <div className='list-rows'>
//         {tasks.map((item) => {
//             return (
//             <div className='list-row'>
//                 <div className='list-col-name'>
//                     <div className='list-item'>{item.name}</div>
//                 </div>
//                 {/* <div >{format(item.start, 'dd/MM/yyyy')}</div> */}
//                 {/* <div >{format(item.end, 'dd/MM/yyyy')}</div> */}
//             </div>
//             );
//         })}
//         </div>
//     );
// };
export const Budgets: React.FC<any> = ({selectedNav, ...rest}) => {
    const [view, setView] = React.useState<ViewMode>(ViewMode.Month);
    const [tasks, setTasks] = React.useState<Task[]>(initTasks());
    const [isChecked, setIsChecked] = React.useState(true);
    let columnWidth = 65;
    if (view === ViewMode.Year) {
        columnWidth = 150;
    } else if (view === ViewMode.Month) {
        columnWidth = 180;
    } else if (view === ViewMode.Week) {
        columnWidth = 150;
    }

  const handleTaskChange = (task: Task) => {
    console.log("On date change Id:" + task.id);
    let newTasks = tasks.map(t => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project = newTasks[newTasks.findIndex(t => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map(t =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter(t => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDblClick = (task: Task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const handleClick = (task: Task) => {
    console.log("On Click event Id:" + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };
    React.useEffect(() => {
        selectedNav('budgets');
    }, []);
    return (
        <div className='page-content'>
            <div className="content-header">
                <div className='content-header-left'>
                    <h1 className='page-title'>Budgets</h1>
                </div>
                <div className='content-header-right'>
                    <Button className='va-btn-lg' 
                        // onClick={() => history.push(`${url}/create`)}
                    >Create a Budget</Button>
                </div>
            </div>
            <div className='content-main content-main-full'>
                {/* <img src={budgetScreenshot} className='budgets-screenshot' alt="Budgets" /> */}
                {/* <Gantt tasks={tasks} TaskListTable={TaskListColumn} TaskListHeader={TaskListHeader} /> */}
                <div className='Wrapper'>
                    {/* <ViewSwitcher
                        onViewModeChange={viewMode => setView(viewMode)}
                        onViewListChange={setIsChecked}
                        isChecked={isChecked}
                    /> */}
                    <Gantt
                        tasks={tasks}
                        viewMode={view}
                        onDateChange={handleTaskChange}
                        onDelete={handleTaskDelete}
                        onProgressChange={handleProgressChange}
                        onDoubleClick={handleDblClick}
                        onClick={handleClick}
                        onSelect={handleSelect}
                        onExpanderClick={handleExpanderClick}
                        listCellWidth={isChecked ? "215px" : ""}
                        columnWidth={columnWidth}
                        headerHeight={40}
                        // ganttHeight={400}
                        rowHeight={40}
                        barCornerRadius={6}
                        barBackgroundColor='var(--smoke)'
                        barProgressColor='var(--va-teal-300'
                        barProgressSelectedColor='var(--va-teal-300'
                        fontFamily='var(--font-regular)'
                        fontSize='0.875rem'
                        projectBackgroundColor='var(--shade)'
                        projectProgressColor='var(--va-teal-300)'
                        projectBackgroundSelectedColor='var(--shade)'
                        projectProgressSelectedColor='var(--va-teal-300)'
                        todayColor='rgba(216, 214, 210, 0.15)'
                    />
                </div>
            </div>
        </div>
    )
}