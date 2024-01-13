import connectMongoDB from "@/libs/database"
import Product from "@/models/Product"

export async function GET(){
    
    try {
        // retrieve data from product model
        await connectMongoDB();
        const products = await Product.find();
        return Response.json(
            products,
          { status: 200 }
        );
      } catch (error: any) {
        return Response.json(
          { success: false, message: error.message },
          { status: 404 }
        );
      }
}