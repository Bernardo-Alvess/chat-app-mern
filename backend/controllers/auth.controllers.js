import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const signup = async (req, res) => {
    try{
        const {fullName, username, password, confirmedPassword, gender} = req.body

        if(password !== confirmedPassword){
            return res.status(400).json({error: "Password don't match!"})
        }

        const user = await User.findOne({username})

        if(user){
            return res.status(400).send({error: "Username already exists!"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        let profilePic = ''

        switch(gender){
            case 'female':
                profilePic = `https://avatar.iran.liara.run/public/girl?username=${username}}`
                break;
            case 'male':
                profilePic = `https://avatar.iran.liara.run/public/boy?username=${username}}`
                break;
            case 'other':
                profilePic = `https://avatar.iran.liara.run/username?username=${fullName}`
                break
        }

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic,

        })

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.userName,
                profilePic: newUser.profilePic
            })
        }else{
            res.status(400).json({ error: 'Invalid user data'})
        }
    }catch(error){

        console.log('Error in signup controller', error.message)
        res.status(500).json({error: "Internal server error!"})
    }
}

export const login = (req, res) => {
    console.log("loginUser")
}

export const logout = (req, res) => {
    console.log("logoutUser")
}