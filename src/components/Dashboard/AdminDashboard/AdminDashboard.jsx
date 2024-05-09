import { useContext } from "react";
import { BsCardText, BsFillGridFill } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminDashboard = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    

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
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })
    return (
        <div>
              <div className="flex items-center mb-6">           
            <h2 className="me-3 text-2xl">Hi, Welcome  </h2>
            <p className="text-4xl capitalize text-orange-600">{
                user?.displayName ? user.displayName :''
            }</p>
        </div>
            <div className="md:flex gap-2">

                <div className="shadow-lg w-64 h-32 p-2 mb-3 bg-yellow-200 flex flex-col items-center justify-center">
                    <h1 className="text-3xl gap-2 my-3">${stats?.revenue}</h1>
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
                    <h1 className="text-3xl gap-2 my-3">{stats?.orders}</h1>
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
                    <h1 className="text-3xl gap-2 my-3">{stats?.users}</h1>
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
                    <h1 className="text-3xl gap-2 my-3">{stats?.products}</h1>
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

            <div className="md:flex gap-4">
                <div className="md:w-1/2 md:mt-5 py-2 rounded-md bg-slate-100 ">
                    <BarChart
                        width={460}
                        height={400}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 0,
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
                <div className="w-1/2 bg-slate-100 mt-5 rounded-md">
                    <PieChart
                        width={400}
                        height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={90}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
