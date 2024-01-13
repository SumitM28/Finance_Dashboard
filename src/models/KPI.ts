import mongoose from "mongoose";
const { Schema } = mongoose;

const daySchema = new Schema(
  {
    date: String,
    revenue: String,
    expenses: String,
  },
 
);

const monthSchema = new Schema(
  {
    month: String,
    revenue:String,
    expenses:String,
    operationalExpenses:String,
    nonOperationalExpenses:String,
  },
 
);

const KPISchema = new Schema(
  {
    totalProfit:String,
    totalRevenue:String,
    totalExpenses:String,
    expensesByCategory: {
      type: Map,
      of: {
        type: String,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true}
);
const KPI = mongoose.models.KPI || mongoose.model("KPI", KPISchema);

export default KPI;