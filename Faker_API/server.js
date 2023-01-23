const express = require("express")
const { faker } = require('@faker-js/faker');
const app = express()
const port = 8000

class Usuario {
    constructor(){
        this.id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.number()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Empresa {
    constructor(){
        this.id = faker.datatype.uuid()
        this.name = faker.company.name()
        this.address = {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.listen(port,()=>console.log("Servidor corriendo en puerto ",port))

app.get("/api/users/new",(req,res)=>{res.json(new Usuario())})
app.get("/api/companies/new",(req,res)=>{res.json(new Empresa())})
app.get("/api/user/company",(req,res)=>{res.json([new Usuario(),new Empresa()])})