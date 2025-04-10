import { POST } from "./axiosServices";
import { register } from "./endpoints";



export const registerApi= (data:any)=>POST(register,data)
