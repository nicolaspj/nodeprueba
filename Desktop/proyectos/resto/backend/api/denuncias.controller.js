import callesDAO from "../dao/callesDao.js"

export default class callesController {
       static async getDenuncias(req , res , next){
            const callesXpage = req.query.callesXpage ? parseInt(req.query.callesXpage,10):20
            
            const page = req.query.page ? parseInt(req.query.page,10):0
            
            let filters= {}
            if(req.query.cuisine){
               filters.cuisine = req.query.cuisine
            }else if(req.query.zipcode){
               filters.zipcode = req.query.zipcode
            }else if(req.query.name){
               filters.name = req.query.name
            }

            const {restaurantsList,totalNumRestaurants} = await callesDAO.getCalles(
                   {
                     filters,
                     page,
                     callesXpage
                   }
            )

            let response = {
                    restaurant : restaurantsList,
                    page : page,
                    filters : filters,
                    entries_per_page : callesXpage,
                    total_restaurants : totalNumRestaurants
            }
            res.json (response)
        }//getDenuncias  
       
}//callesController