import express from "express";
import {verifyLogin ,adminAuth} from "../middlewares/protectRoute.js";
import { makeOrder , getAllOrders, getOrderById } from "../controllers/orderController.js";

const routes=express();

routes.post('/order',verifyLogin,makeOrder)
routes.get('/getAll',getAllOrders)
routes.get('/getOne/:_id',verifyLogin,getOrderById)
routes.delete('/delete',verifyLogin,getAllOrders)



export default routes;