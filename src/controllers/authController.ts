import { Request, Response } from "express"
import { hashPassword } from "../services/password.service"
import prisma from '../models/user'
import { generateToken } from "../services/auth.service"

export const register = async(req: Request,res: Response):Promise<void> =>{
    const {email, password} = req.body
    try {
        const hasedPassword= await hashPassword(password)
        const user= await prisma.create(
            {
                data: {
                    email,
                    password: hasedPassword
                }
            }
        )
        const token = generateToken(user)
        res.status(201).json({token})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: 'Hubo un error en el registro'
        })
    }

}