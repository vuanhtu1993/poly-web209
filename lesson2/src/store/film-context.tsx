// useContext, useReducer
import { createContext, useReducer } from 'react'
import { IFilm } from '../models'

export const FilmContext = createContext({} as any)

type Props = {
    children?: React.ReactNode
}

const intialState: IFilm[] = []

// complex logic
const reducer = (state: IFilm[], action: { type: string, payload: IFilm[] }) => {
    switch (action.type) {
        case "FETCH_DATA":
            return action.payload
        case "ADD_DATA":
            return state
        default:
            return state
    }
}

const FilmProvider = ({ children }: Props) => {
    const [films, dispatch] = useReducer(reducer, intialState)
    return <FilmContext.Provider value={{ films, dispatch }}>
        {children}
    </FilmContext.Provider>
}

export default FilmProvider