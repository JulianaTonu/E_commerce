import { useContext } from "react";
import { BsCardText, BsFillGridFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminDashboard = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    console.log(user)

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data;
        }
    })
    console.log(chartData)


    //custom shape for the bar chart

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    //custom shape for the pie chart
    const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
    return (
        <div>
            <div className="md:flex gap-2">

                <div className="shadow-lg w-64 p-2 mb-3 bg-yellow-200 flex flex-col items-center justify-center">
                    <h1 className="text-3xl gap-2 mt-3">{stats?.revenue}</h1>
                    <div className="flex justify-between w-full">
                        <div>
                            <h1 className="text-xl">Total Revenue</h1>
                            <p className="text-sm text-slate-400">last 30 days</p>
                        </div>
                        <div className="text-cyan-400 text-4xl mt-2">
                            <FaDollarSign />
                        </div>
                    </div>
                </div>
                <div className="shadow-lg w-64 p-2 mb-3 bg-green-200 flex flex-col items-center justify-center">
                    <h1 className="text-3xl gap-2 mt-3">{stats?.orders}</h1>
                    <div className="flex justify-between w-full">
                        <div>
                            <h1 className="text-xl">Total Orders</h1>
                            <p className="text-sm text-slate-400">last 30 days</p>
                        </div>
                        <div className="text-cyan-400 text-4xl mt-2">
                            <BsCardText />
                        </div>
                    </div>
                </div>

                <div className="shadow-lg w-64 p-2 mb-3 bg-red-200 flex flex-col items-center justify-center">
                    <h1 className="text-3xl gap-2 mt-3">{stats?.users}</h1>
                    <div className="flex justify-between w-full">
                        <div>
                            <h1 className="text-xl">Total Customer</h1>
                            <p className="text-sm text-slate-400">last 30 days</p>
                        </div>
                        <div className="text-cyan-400 text-4xl mt-2">
                            <FiUsers />
                        </div>
                    </div>
                </div>


                <div className="shadow-lg w-64 p-2 mb-3 bg-blue-200 flex flex-col items-center justify-center">
                    <h1 className="text-3xl gap-2 mt-3">{stats?.products}</h1>
                    <div className="flex justify-between w-full">
                        <div>
                            <h1 className="text-xl">Total Products</h1>
                            <p className="text-sm text-slate-400">last 30 days</p>
                        </div>
                        <div className="text-cyan-400 text-4xl mt-2">
                            <BsFillGridFill />
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2"></div>
            </div>
        </div>
    );
};

export default AdminDashboard;
