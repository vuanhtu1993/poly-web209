import { createContext, useReducer } from 'react'
import { IFilm } from '../models'

export const FilmContext = createContext({} as any)

type Props = {
    children?: React.ReactNode
}

type StateType = {
    films: IFilm[],
    isLoading: boolean
}

const intialState: StateType = {
    films: [],
    isLoading: false
}

const reducer = (state: StateType, action: { type: string, payload: any }) => {
    switch (action.type) {
        case "FETCH_DATA":
            return { ...state, films: action.payload }
        default:
            return state
    }
}

const FilmProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(reducer, intialState)
    return <FilmContext.Provider value={{ state, dispatch }}>
        {children}
    </FilmContext.Provider>
}

export default FilmProvider