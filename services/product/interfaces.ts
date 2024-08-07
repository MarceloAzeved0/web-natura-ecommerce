export interface IProduct {
  name: string
  description: string
  price: number
  discount: number
  imageURL: string
}

export interface IGetProductsResponse {
  products: IProduct[]
  total: number
}
