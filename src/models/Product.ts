import mongoose from "mongoose";


const Schema = mongoose.Schema;
// loadType(mongoose);

const ProductSchema = new Schema(
  {
    price: {
      type: String,
    },
    expense: {
      type: String,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true }
);

const Product =   mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;