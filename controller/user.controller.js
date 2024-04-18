const { UserModel } = require("../models/user.schema");

const createUser = async(req,res)=>{
    const { email, name } = req.body;

    try {
        const user = new UserModel({email, name});
        await user.save();
        return res.status(200).send({ error : false, items : user });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error :true, message : error })
    }
}

module.exports = {
    createUser
}