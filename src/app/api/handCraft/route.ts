import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { writeFile, unlink } from "fs/promises";  // Added unlink for deleting files
import { existsSync, mkdirSync } from "fs";

const products = [{id : 1 ,
    name : 'Traditional Handcrafted Wooden Chair',
    title : 'Authentic heritage craftsmanship from artisans of North India',
    image : '/images/handCraft.png',
    prize : 199.99,
    quantity : 10,
    discountPercent : 20,
    

}]