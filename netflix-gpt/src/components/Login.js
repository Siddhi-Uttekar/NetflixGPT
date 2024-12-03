import { BG_URL } from "../utils/constant";
import Header from "./Header";
const Login = () => {

    return (
        <div className="relative min-h-screen">
            <Header />
            <div className="absolute inset-0">
                <img
                    src={BG_URL}
                    alt="background-img"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex items-center justify-center min-h-screen relative z-10">
                <form className="w-3/12 p-12 bg-black bg-opacity-75 rounded">
                    <input type="text" placeholder="Enter email" className="p-2 m-2 w-full bg-slate-800 border-r " />
                    <input type="password" placeholder="Password" className="p-2 m-2 w-full bg-slate-800" />
                    <button className="p-4 m-4 w-full h-12 bg-red-600 text-white">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;