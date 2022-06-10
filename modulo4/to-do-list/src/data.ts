export type User = {
    "id": string,
    "name": string,
    "nickname": string,
    "email": string
}
export type Task = {
    "taskId": string,
    "title": string,
    "description": string,
    "limit_date": Date,
    "status"?: string,
    "creatorUserId": string,
    "creatorUserNickName": string
}