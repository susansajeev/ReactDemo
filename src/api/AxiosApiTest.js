import axios from 'axios'
import React from 'react'

const apitest = axios.create({
    baseURL: "https://reactdemo.free.beeceptor.com/api/",
    headers: {
        'Content-Type': 'application/json',
    }

});


apitest.interceptors.request.use(
    (config) => {
        const token = "qwsderfgthyjukilop"; // or get from context
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

apitest.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.warn('Unauthorized. Redirect to login or logout.');
            // Optionally trigger logout here
        }
        return Promise.reject(error);
    }
);

export default apitest;