import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()

//register a new endpoint /auth/register
router.post('/register',(req,res)=>{

    const {username,password} = req.body
    //saves gaurav123 | hhnfkenfweoskndks (encrypted password)
    //saves username and irreversibly encrypted password

    //encrypt the password
    
    const hashedPassword = bcrypt.hashSync(password,8)

    // save the new user and hashed password to the db
    try {
        const insertUser = db.prepare(`INSERT INTO users (username,password)
            VALUES (?,?)`)
        const result = insertUser.run(username, hashedPassword)

        //now that we have a user ,I wnt to add first todo
        const defaultTodo ='Hello! Add yout first Todo!'
        const insertTodo = db.prepare(`INSERT INTO todos {user-id, task}
            VALUE(?,?)` )
        insertTodo.run(result.lastInsertRowid,defaultTodo)

        //creating a token
        const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET,{ expiresIn:'24h'})

    } catch (error) {
        console.log(error.message)
        res.sendStatus(503)
    }

    console.log(hashedPassword);
    res.sendStatus(201)
    
})

router.post('/login',(req,res)=>{

    //we get email and we look for password associated with it
    //when we get it back the password is encrypted
    //so it cannot be compared with the password entered by the user
    //so what we can do is again, one way encrypt the password user entered


})

export default router
