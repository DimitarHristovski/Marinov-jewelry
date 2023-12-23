export interface ProductType{
    id:string;
    title:string;
    price:number;
    stock:number;
    description:string;
    material:string;
    dimensions:string;
    weight:string;
    caretips: Array<{ [key: string]: string }>;
    images: Array<{ [key: string]: string }>;
}