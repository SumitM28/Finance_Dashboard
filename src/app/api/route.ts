import connectMongoDB from "@/libs/database"
import KPI from "@/models/KPI";
export async function GET(req:Request, res:Response){

  try {
    // throw new Error("Something went wrong")
    return Response.json({message:"api running properly"},{status:200})
  } catch (error:any) {
    return Response.json({message:error.message},{status:error.status})
  }

}

export async function POST(){
  try {
    await connectMongoDB();
    const kpis = await KPI.find();
    return Response.json({
      success:true,
      message:"user created successfully",
      kpis:kpis
    })
    
  } catch (error:any) {
    return Response.json({message:error.message},{status:error.status})
  }
}