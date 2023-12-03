import { NextResponse } from "next/server";

export function GET(req, res) {


    const data = [
        {
            id: 1,
            name: 'FS GRUPO CONTRUCTOR',
            description:
                'The main objective is to provide an online platform where the company can showcase its services and projects in a professional and effective way.',
            status: 'Completed',
            coverImage: '/fsgruposcreen.png',
            images: [""],
        },
        {
            id: 2,
            name: 'API BACK PHONES',
            description:
                'This project is an e-commerce API with authentication, chat and shopping cart functionalities.',
            status: 'Completed',
            coverImage: '/apiphones.jpg',
            images: [""],
        },
        {
            id: 3,
            name: 'API FRONT RICK AND MORTY',
            description:
                'The app, built with React, allows you to explore detailed information about Rick and Morty characters, episodes and locations in an interactive and visually appealing way.',
            status: 'Completed',
            coverImage: '/apirick.jpg',
            images: [],
        },
        {
            id: 4,
            name: ' SHOPIFY APP CERVOSTYLE',
            description:
                'Custom Shopify app. Designed for a fashion brand currently prominent on the scene, this app offers an online shopping experience that reflects the unique and modern essence of the brand.',
            status: 'Live',
            coverImage: '/cervoprincipal.jpg',
            images: [""],
        },
    ];


    return NextResponse.json({ message: 'Proyectos', payload: data });
}