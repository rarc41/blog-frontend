
import Axios from 'axios'

export const home = "http://localhost:3000"
export const api = "http://localhost:8000";

const TOKEN_KEY = 'BLOG_TOKEN';

export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = ()=> {
    return localStorage.getItem(TOKEN_KEY)
}

export const deleteToken = ()=> {
    localStorage.removeItem(TOKEN_KEY)
}

export const initAxiosInterceptors = () => {
    Axios.interceptors.request.use(config => {
        const token = getToken();

        if (token) {
            config.headers.Authorization =`bearer ${token}`;
        }

        return config
    })

    Axios.interceptors.response.use(
        response => {
            return response
        }, 
        error => {
            if (error.response.status===401){
                deleteToken()
                window.location=`${home}`
            } else {
                return Promise.reject(error)
            }
        }
    )
}


