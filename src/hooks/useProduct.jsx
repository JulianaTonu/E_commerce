import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProduct = () => {
    const axiosPublic = useAxiosPublic()

    const { data: products = [], isPending: loading, refetch } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await axiosPublic.get('/product')
            return res.data;
        }
    })

    return [products, loading, refetch]
}

export default useProduct;