const Products= require('../modells/product')


const resolvers  = {
    Query : {
        products: async ()=>
            {
                try{
                 const productList= await Products.find({});
                console.log("Product found !");
                return productList;
                
                }catch(err){
                    console.log("Can find any product");
                    
                }

            },
        product: async (_, { id }) => {
        try{   
        const getSingleItem = await Products.findById(id);
        console.log("Product found");
        return getSingleItem;
        }catch(error){
            console.log(error);
            console.log("Product can't be found with this id");
        }
        }
        },
        // product: (_, { id }) => products.find((item) => item.id === id),
    
    Mutation : {
        createProduct : async(_,args)=>{
            try{
            const newlyCreatedProduct = new Products(args);
            console.log("created Product sucessfully");
            return await newlyCreatedProduct.save();
            }catch(err){
                console.log("Error while creating product");
            }
        },
         deleteProduct : async(_,{ id, deletedProduct }) =>{
             try {
                const deletedProduct = await Products.findByIdAndDelete(id);
                return !!deletedProduct;
             } catch (error) {
                console.log("cannot delete the deatails does't exists");
                
             }
         },
        updateProduct : async(_,{ id, ...updates}) =>{
        try{
            const ProductUpdated = await Products.findByIdAndUpdate(id,updates, {new:true});
            console.log("sucessfully updated details");
            return ProductUpdated;
         }catch(error){
            console.log(`error found while updating`,error);
         }
        }
    }
}

module.exports = resolvers;