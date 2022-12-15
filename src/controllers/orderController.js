import Orders from '../models/orderModel.js'
import Users from '../models/userModel.js'
import orderValidation from '../helpers/validation.js'


  export const makeOrder = async (req, res) => {
    try {
      const { username, email,  address,product } = req.body;
     
      const user = await Users.findOne({ email });
      if (!user)
        return res
        //hello
          .status(400)
          .json({ message: "wrong email address.Please retry" });
      await new Orders({ username, email,  address,product }).save();
      res.status(201).json({
        message: "You have successfully placed your order",
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

   export const getAllOrders = async (req, res) => {
    try {
      const orders = await Orders.find();
      res.status(200).json({ orders });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  export const getOrderById = async (req, res) => {
    let id = req.params.id;
    Orders
      .findById(id)
      .then((result) => {
        res.status(200).json({
          status: 200,
          results: result
        });
      })
      .catch((err) => {
        res.status(404).json({ msg: "no order available" });
      });
  };
