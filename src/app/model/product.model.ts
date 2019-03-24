import { CATEGORY_NAMES } from './categories.model';

export interface Product {
    id: number
    name: string
    description: string
    price: number
    categoryName: string
}

export const PRODUCTS = [
    {
        id: 1,
        name: "The First Years Stack Up Cups",
        description: "Eligible for Shipping to Israel",
        price: 15,
        categoryName: CATEGORY_NAMES.TOYS,
        image: "./assets/cups.jpg"
    },
    {
        id: 2,
        name: "Mega Bloks 80-Piece Big Building Bag, Classic",
        description: "Eligible for Shipping to Israel, Ages: 12 months - 5 years",
        price: 50,
        categoryName: CATEGORY_NAMES.TOYS,
        image: "./assets/mega-blocks.jpg"
    },

    {
        id: 3,
        name: "GRECERELLE Women's Casual Loose Pocket Long Dress",
        description: "Short Sleeve Split Maxi Dresses",
        price: 850,
        categoryName: CATEGORY_NAMES.CLOTHES,
        image: "./assets/dress.jpg"
    },
    {
        id: 4,
        name: "PUMA x Selena Gomez Defy Mid Women's Shoe",
        description: "PUMA black shoes",
        price: 540,
        categoryName: CATEGORY_NAMES.CLOTHES,
        image: "./assets/jacket.jpg"
    },

    {
        id: 5,
        name: "The Lakeside Collection IRIS Extra Large 4 x 6",
        description: "Photo and Craft Storage Case, Clear",
        price: 98,
        categoryName: CATEGORY_NAMES.HOME,
        image: "./assets/box.jpg"
    },
    {
        id: 6,
        name: "Burlap Table Runner 12X108",
        description: "Dining Table Runner Roll",
        price: 140,
        categoryName: CATEGORY_NAMES.HOME,
        image: "./assets/runner.jpg"
    },

    {
        id: 7,
        name: "42pcs Felt Fabric Sheet 4x4",
        description: "Assorted Color DIY Craft Squares Nonwoven 1mm Thick",
        price: 56,
        categoryName: CATEGORY_NAMES.ART,
        image: "./assets/fabric.jpg"
    },
    {
        id: 8,
        name: "DIY 5D Diamond Painting Beach by Number Kits",
        description: "Painting Cross Stitch Full Drill Crystal Rhinestone Embroidery Pictures",
        price: 140,
        categoryName: CATEGORY_NAMES.ART,
        image: "./assets/beach_painting.jpg"
    },
    {
        id: 9,
        name: "AmazonBasics Multipurpose Scissors - 3-Pack",
        description: "Eligible for Shipping to Israel",
        price: 35,
        categoryName: CATEGORY_NAMES.ART,
        image: "./assets/scissors.jpg"
    },
]