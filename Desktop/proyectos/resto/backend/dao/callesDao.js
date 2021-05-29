let calles

export default class callesDAO{
      static async injectDB (conn){
           if (calles){
               return
           }
           try{
               calles= await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants")//cambiar la bd en mongodb con las calles
           }
           catch(e){
               console.error('imposible establecer coneccion con la coneccion'+{$e})
           }
      }

      static async getCalles({
               filters= null,
               page=0,
               callesXpagina= 10
      }={}){
               let query
               if (filters){
                   if("name" in filters){
                      query = {$text: {$search : filters["name"]}}
                   }else if("cuisine" in filters){
                      query = {"cuisine":{$eq : filters ["cuisine"]}}
                   }else if ("zipcode"){
                      query = {"adress.zipcode": {$eq:filters ["zipcode"]}}
                   }
               }
      

               let cursor

               try{
               cursor= await restaurants.find(query)
               }catch(e){
                   console.error('unable to issue find command'+ {$e})
                   return {restaurantsList:[],totalNumRestaurants: 0}
               }

               const displayCursor = cursor.limit(restaurantsPerPage).skip(restaurantsPerPage)
               try{
                 const restaurantsList =  await displayCursor.toArray()             
                 const totalNumRestaurants = await restaurants.countDocuments
                 (query)
                 return{restaurantsList , totalNumRestaurants}
               }catch (e){
                  console.error('Unable to convert cursor to array or problem counting documents'+$e)
                  return {restaurantsList:[], totalNumRestaurants:0}
               }
    }//getcalles
}