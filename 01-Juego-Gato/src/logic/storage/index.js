export const saveGameFrom = ({board, turn}) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const resetGameFrom = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}