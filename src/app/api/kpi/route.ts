import connectMongoDB from "@/libs/database";
import KPI from "@/models/KPI";

export async function GET() {
  try {
    // retrieve data from KPI model
    await connectMongoDB();
    const kpis = await KPI.find();
    return Response.json(
      kpis,
      { status: 200 }
    );
  } catch (error: any) {
    return Response.json(
      { success: false, message: error.message },
      { status: 404 }
    );
  }
}
