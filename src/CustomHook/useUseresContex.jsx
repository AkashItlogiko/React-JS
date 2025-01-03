import  { useContext } from 'react'
import { UsersContext } from '../ContextAPI/UsersContext'

export const useUsersContext=()=>{
    return useContext(UsersContext)
}