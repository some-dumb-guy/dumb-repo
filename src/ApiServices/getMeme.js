import axios from "axios"

export const getMeme = async()=> {
    const response = await axios.get("https://api.imgflip.com/get_memes",{}, {})
    return response;
}