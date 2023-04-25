export interface ProfileType {
    id: number,
    email: String,
    avatar: String,
    phoneNumber: String,
    name: String,
    accessToken: String
}

export interface LoginType {
    email: String,
    passWord: String,
}

export interface SignupType {
    email: String,
    passWord: String,
    name: String,
    phoneNumber: String,
}