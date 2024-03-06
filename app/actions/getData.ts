import axios from "axios";

export default async function getData() {
    try {
        const res = await fetch(`https://nextjs-test-pi-hazel-56.vercel.app/data/games.json`);

        const data = res.json()
    
        return data;
        
    } catch (error: any) {
        console.log(error)
        return null;
    }
}