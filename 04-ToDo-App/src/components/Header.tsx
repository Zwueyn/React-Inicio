import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
    saveTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ saveTodo }) => {
    return (
        <header className="header">
            <h1>ToDo<img
                style={{width: '60px', height: 'auto'}}
                src='https://www.svgrepo.com/show/374144/typescript.svg'/>
            </h1>

            <CreateTodo saveTodo={saveTodo} />
        </header>
    )
}