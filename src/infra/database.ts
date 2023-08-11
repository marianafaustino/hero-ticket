import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect('mongodb+srv://marifaustino:cZJmYfbV2wm2zeQs@cluster0.bwcez8p.mongodb.net/hero-ticket')
        console.log('Conectou ao banco')
    } catch (error) {
        console.log("Deu erro", error)
    }
}