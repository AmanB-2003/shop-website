import { useEffect, useState } from "react";
import makeRequests from '../makeRequests';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                setLoading(true);
                const res = await makeRequests.get(url);
                setData(res.data.data);
                setLoading(false);
            }catch(err){
                console.log(err);
                setError(true);
            }
        }

        fetchData();
    },[url]);

    return {data, loading, error};
}

export default useFetch;
