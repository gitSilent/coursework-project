export interface IProductCard{
    id: number,
    title: string,
    price: number,
    photos:{
        image: string
    }[]
}

export interface IReview{
    username:string,
    creation_date: string,
    description: string,
    rating: number
}

export interface IProduct extends IProductCard{
    description: string,
}

