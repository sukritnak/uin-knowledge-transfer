import { atom } from 'recoil'


export interface UserStateType {
    user: string,
    fullName: string
}

export const userState = atom<UserStateType>({
    key: 'userState',
    default: {
        user: 'no-id',
        fullName: 'noname'
    }
})