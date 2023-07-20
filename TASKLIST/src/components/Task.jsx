function Task () {
    return (
    <div>
        <h1>Pending Task</h1>
        <ul>
        <li>
            <input type="checkbox" />
            Tarea 1<button>Delete</button>
            <button>Edit</button>
        </li>

        <li>
            <input type="checkbox" />
            Tarea 2<button>Delete</button>
            <button>Edit</button>
        </li>
        </ul>
    </div>
    );
}

export {Task};