import { type ListOfToDos } from '../types';
import { Todo } from "./Todo"
import { type TodoId, type TodoCompleted } from "../types"
import { type Todo as TodoType } from "../types"

interface Props {
    todos: ListOfToDos
    onRemoveTodo: (id: TodoId) => void
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} 
                className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onToggleCompleteTodo={onToggleCompleteTodo}
                    onRemoveTodo={onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
    )
}