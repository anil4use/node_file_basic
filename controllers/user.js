import {Users}  from "../models/users.js";

export const getallusers =  async (req, res) => {
    const users = await Users.find({});
    //    console.log(req.query);
    const key = req.query.key;
    console.log(key)
    res.json({
        succes: true,
        users
    });
}; 
export const createUSER = async (req, res) => {
    const { name, email, password } = req.body;
    await Users.create({
        name,
        email,
        password
    });
    res.json({
        succes: true,
        message: "ressi succ"
    })
};
export const special = async(req, res) => {
    res.json({
        succes: true,
        message: "yes"
    })
} ;
export const getusersdatals = async (req, res) => {
    const { id } = req.params;
    // console.log(req.params)
    const users = await Users.findById(id)
    res.json({
        succes: true,
        users,
    })
};
export const UpdateUser = async (req, res) => {
    const { id } = req.params;
    // console.log(req.params)
    const users = await Users.findById(id)
    res.json({
        succes: true,
        message:"updated"
    })
};
export const DeleteUser = async (req, res) => {
    const { id } = req.params;
    // console.log(req.params)
    const users = await Users.findById(id);
    // await users.remove();
    res.json({

        succes: true,
        message:"delete"
    })
};