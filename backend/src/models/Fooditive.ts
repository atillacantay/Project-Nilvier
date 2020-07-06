import mongoose, { Schema } from 'mongoose'

export interface IUser extends mongoose.Document {
  name: string
  somethingElse?: number
}

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  somethingElse: Number,
})

//Category Interface
export interface Category extends mongoose.Document {
  category_name: string
  date: string
  contents: [Schema.Types.ObjectId]
}

//Content Interface
export interface Content extends mongoose.Document {
  company_name: string
  products: [Schema.Types.ObjectId]
}

//Product Interface
export interface Product extends mongoose.Document {
  brand: string
  product_name: string
  unsuitability: string
  serial_number: string
}

//Category Schema
export const CategorySchema = new mongoose.Schema({
  category_name: String,
  date: String,
  contents: [Schema.Types.ObjectId],
})

//Content Schema
export const ContentSchema = new mongoose.Schema({
  company_name: String,
  products: [Schema.Types.ObjectId],
})

//Product Schema
export const ProductSchema = new mongoose.Schema({
  brand: String,
  product_name: String,
  unsuitability: String,
  serial_number: String,
})

const Category = mongoose.model<Category>('Category', CategorySchema)
const Content = mongoose.model<Content>('Content', ContentSchema)
const Product = mongoose.model<Product>('Product', ProductSchema)

export default { Category, Content, Product }
