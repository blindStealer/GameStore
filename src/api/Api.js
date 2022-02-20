import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    "API-KEY": "51bd7e29-08d6-41be-b59b-00fef99413fe",
})



export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,

        )
            .then(response => response.data)
    }


}

