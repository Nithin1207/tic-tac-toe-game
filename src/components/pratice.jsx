const tasks = [
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" }
];

export default function TaskList() {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>{task.name}</li>
            ))}
        </ul>
    );
}
