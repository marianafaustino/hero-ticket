import { NextFunction, Request, Response } from "express";
import { EventUseCase } from "../useCase/EventUseCase";
import { Event } from "../entities/Event";

class EventController {
    constructor(private EventUseCase: EventUseCase){

    }

    async create(request: Request, response: Response, next: NextFunction){
        const eventData: Event = request.body
        console.log('Event Controller', request)
        try {
            await this.EventUseCase.create(eventData)
            return response.status(201).json({message: 'Evento criado com sucesso.'})
        } catch (error) {
           next(error) 
        }
    }
}

export {EventController}