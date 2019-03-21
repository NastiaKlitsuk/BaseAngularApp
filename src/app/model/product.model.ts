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
        name: "Nerf N-Strike Elite SurgeFire",
        description: "Ages: 8 years and up",
        price: 150,
        categoryName: CATEGORY_NAMES.TOYS
    },
    {
        id: 2,
        name: "Spalding NBA Street Basketball",
        description: "Standard basketball",
        price: 50,
        categoryName: CATEGORY_NAMES.TOYS
    },

    {
        id: 3,
        name: "Steve Madden Women's Cliff Sneaker",
        description: "Comfortable and soft",
        price: 850,
        categoryName: CATEGORY_NAMES.CLOTHES
    },
    {
        id: 4,
        name: "PUMA x Selena Gomez Defy Mid Women's Shoe",
        description: "PUMA black shoes",
        price: 540,
        categoryName: CATEGORY_NAMES.CLOTHES
    },

    {
        id: 5,
        name: "RCA Digital Alarm Clock with Large 1.4 Display",
        description: "Glow in the dark",
        price: 98,
        categoryName: CATEGORY_NAMES.HOME
    },
    {
        id: 6,
        name: "Baby Shusher Sleep Miracle Soother",
        description: "Baby Shusher Sleep Miracle Soother",
        price: 140,
        categoryName: CATEGORY_NAMES.HOME
    },

    {
        id: 7,
        name: "TheNameStore Bathroom Quotes and Sayings Art Prints",
        description: "Set of Four Photos 8x10 Unframed | Great ",
        price: 56,
        categoryName: CATEGORY_NAMES.WALL_ART
    },
    {
        id: 8,
        name: "Wieco Art The Cloud Tree Wall Art ",
        description: "Oil PaintingS Giclee Landscape Canvas Prints for Home Decorations, 3 Panels",
        price: 140,
        categoryName: CATEGORY_NAMES.WALL_ART
    },
]