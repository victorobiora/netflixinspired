import axios from "axios";

const fetchData = async (path, token, method = 'GET' , body) => {
    const fetch = await axios.get(path, {
        method: method,
        headers: {
            accept : 'application/json',
            Authorization: "Bearer " + token 
          }
    })

    return fetch
}

export default fetchData;