import connectMongoDB from "@/libs/database"
import Transaction from "@/models/Transaction"
export async function GET(){
    try {
        // retrieve data from product model
        await connectMongoDB();
        const products = await Transaction.find().limit(50).sort({createdOn:-1});
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