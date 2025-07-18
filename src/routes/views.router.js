import { Router } from "express"
import { ProductManager } from "../managers/ProductManager.js"

const viewsRouter = Router()

viewsRouter.get("/", (req, res)=> {
    const pageName = "Static products"
    ProductManager.getProducts()
    .then(products => {
        const noSocket = true 
        res.render("home",{
            pageName,
            noSocket,
            products
        })
    })
})

viewsRouter.get("/realTimeProducts" , (req,res)=>{
    const pageName = "Real time products"
        res.render("realTimeProducts",{
            pageName,
        })
    })

export default viewsRouter