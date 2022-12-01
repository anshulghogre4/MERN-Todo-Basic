const User = require("../model/user")


exports.home = (req, res) =>{
    res.send("Hello Dark Horse");
};

//creating user
exports.createUser = async (req, res) =>{
  
try {
    const{firstname, email} = req.body;
    //to check they exists or not
    if(!firstname && !email){
        throw new Error("Name and Email are Required");
        
    }

    //to check with database for existing user

    const userExistsInDB = await User.findOne({email});
    if (userExistsInDB) {
        throw new Error("Email Already Exists");
        res.send("Email Already Exists");
    }
    //insering in MongoDB
    const user = await User.create({
        firstname,
        email
    })
    res.status(201).json({
        success : true,
        message : "User Created!",
        user
    })

} catch (error) {
    console.log(error);
}
}


//getting user
exports.getUsers = async (req, res)=>{
    try {
        //to show whatever we have in the database
        const user = await User.find();
        res.status(201).json({
            success:true,
            user
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success : false,
            message : "error!"
        })
    }
}

//to update user

exports.editUser = async (req, res) =>{
    try {
        const user = await User.findByIdAndUpdate(req.params._id,req.body);
        res.status(201).json({
            success:true,
            message : "User updated Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:"Error!",
        })
    }
};

exports.deleteUser = async (req, res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params._id);
        res.status(201).json({
            success:true,
            message : "User deleted Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message:"Error!",
        })
    }
};