import { NextFunction } from "express"
import { HttpException } from "../interfaces/HttpException"

export function errorMiddleware(
    err: HttpException, 
    req: Request, 
    res: Response, 
    next: NextFunction){

    const status: Number = err.status ?? 500
    const message: string = err.message ?? 'Erro interno'

    res.status(status).json({
        status,
        message
    })
}