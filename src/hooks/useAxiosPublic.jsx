import axios from "axios";

const axiosPublic =axios.create({
    baseURL:'https://e-commerce-server-side-ashen.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;