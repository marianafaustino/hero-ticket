import axios from "axios";
import { Event } from "../entities/Event";
import { HttpException } from "../interfaces/HttpException";
import { EventRepository } from "../repositories/EventRepositoy";

class EventUseCase{
    constructor(
        private eventRepository: EventRepository){

    }

    async create(eventData: Event){
        if(!eventData.banner){
            throw new HttpException(400,'O banner é requerido')
        }
        if(!eventData.flyers){
            throw new HttpException(400,'Flyers é requerido')
        }
        if(!eventData.location){
            throw new HttpException(400, 'Localização é requerida')
        }

        const cityName =  this.getCityNameByCoordinates(
            eventData.location.latitude,
            eventData.location.longitude,
        )

        const result = await this.eventRepository.add(eventData)
        return result
    } 

    private async getCityNameByCoordinates(latitude: string,longitude: string){
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCRwGHzLQ8TXJeTpM5Xi0LkPrl6wXTeWik`)
        console.log('response', response.data)
    }
}

export {EventUseCase}