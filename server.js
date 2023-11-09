import { createServer,  Model } from "miragejs"
import data from "./data.json";

createServer({
    models: {
        vans: Model,
    },
    
    seeds(server) {
        data.forEach((itemData) => {
            server.create("van", itemData);
          });
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/Graduats", (schema, request) => {
            return schema.vans.all()
        })

        this.get("/Graduats/:studentNationalId", (schema, request) => {
            const studentNationalId = request.params.studentNationalId
            return schema.vans.find(studentNationalId)
        })

        this.get("/host/Graduats", (schema, request) => {
            // Hard-code the hostId for now
             //return schema.vans.where({ hostId: "123" })
             return schema.vans.where({ isAccredited: 'true' })
        })

        this.get("/host/Graduats/:studentNationalId", (schema, request) => {
            // Hard-code the hostId for now
            const studentNationalId = request.params.studentNationalId
            return schema.vans.findBy({ studentNationalId })
        })
       
    }
})