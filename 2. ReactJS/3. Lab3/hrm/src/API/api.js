// Khai báo thông tin cấu hình chung nhất trong chương trình

import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    // Cấu hình các liên quan bảo mật, token này kia
    headers: {
        "content-type": "application/json",
    },
});


// Cấu hình chung
// method: get, post, put, delete
// endpoint: vd accounts, departments ... đường link mở rộng
// paypload: các thông tin cần gửi đi để update or thêm mới
export const api = (method, endpoint, playolad) => {
    return axiosClient(endpoint, { method: method, data: playolad })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
