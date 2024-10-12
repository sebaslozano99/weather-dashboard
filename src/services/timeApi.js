


export default async function getCurrentPositionsTime(lat, lon){
    try{
        const res = await fetch(`https://timeapi.io/api/time/current/coordinate?latitude=${lat}&longitude=${lon}`);
        const data = await res.json();
        
    //   setPositionTime(new Date(data?.dateTime));
        return data;
    }
    catch(err){
        throw new Error(err);
    }

}