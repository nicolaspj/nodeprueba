import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.routes.js"// al finalizar cambiar a calles

const app = express()

app.use(cors())
app.use(express.json())

app.use("/app/v1/restaurants", restaurants)
app.use("*", (req , res ) => res.status(404).json({error :"no se encontro"}))

export default app 