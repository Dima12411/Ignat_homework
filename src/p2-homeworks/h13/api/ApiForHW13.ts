import axios, {AxiosResponse} from "axios";

export const RequestAPI = {
    check(success: boolean) {
        return axios.post<boolean, AxiosResponse<any>>("https://neko-cafe-back.herokuapp.com/auth/test", {success})
    }
}

