import { App } from "../app"
import { Event } from "../entities/Event"
import request from "supertest"

const app = new App()
const express = app.app

describe('Event Test', ()=>{
    it('/POST Event', async ()=>{
        const event ={
            title: 'jorge e Matheus',
            price: [{sector: 'Pista', amount: '20'}],
            description: 'Evento descrição',
            city: 'Belo Horizonte',
            location:{
                latitude: '-19.8658619',
                longitude: '-43.9737064'
            },
            cupons: [],
            date: new Date(),
            participantes:[],
        }
        const response = await request(express)
        .post('/events')
        .field('title', event.title)
        .field('description', event.description)
        .field('city', event.city)
        .field('cupons', event.cupons)
        .field('location[latitude]', event.location.latitude)
        .field('location[longitude]', event.location.longitude)
        .field('price[sector]', event.price[0].sector)
        .field('price[amount]', event.price[0].amount)
        .attach('banner','/Users/marif/OneDrive/Imagens/Capturas de tela/Captura de tela 2023-08-11 153345.png')
        .attach('flyers','/Users/marif/OneDrive/Imagens/Capturas de tela/Captura de tela 2023-08-11 153345.png')
        if(response.error){
            console.log('Erro', response.error)
        }
        expect(response.status).toBe(201)
        expect(response.body).toEqual({message: 'Evento criado com sucesso.'})
    })
})