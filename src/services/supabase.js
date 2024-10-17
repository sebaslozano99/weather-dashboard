import supabase from "../supabase/supabaseClient";



async function signUp({email, password, username}){

    if(!email || !password || !username) {
        throw new Error("All fields are required!");
    }

    try{
        const { data, error } = await supabase.auth.signUp(
            {
                email,
                password,
                options: {
                    data: {
                        username,
                    }
                }
            }
        )

        if(error){
            console.log(error);
            throw new Error(error.message || "An unknown error ocurred!");
        }

        return data;

    }
    catch(error) {
        throw new Error(error.message || "An error ocurred during sign up!");
    }
}





async function logIn({email, password}){

    if(!email || !password) {
        throw new Error("All fields are required!");
    }

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })


        if(error) {
            console.log(error);
            throw new Error(error.message || "An unkown error ocurred!");
        }


        return data;

    }
    catch(error){ 
        throw new Error(error.message || "An error ocurred while logging in!"); 
    }
      
}




async function logOut(){
    try{
        const { error } = await supabase.auth.signOut();

        if(error){
            console.log(error);
            throw new Error(error.message || "An unknown error ocurred!");
        }
    }
    catch(error){
        throw new Error(error.message || "An error ocurred during sign out!");
    }

}




async function fetchUsersWeatherList(user_id){
    try {

        const { data: myWeathers, error } = await supabase
        .from('myWeathers')
        .select('*')
        .eq("user_id", user_id);

        if(error){
            throw new Error(error.message || error.description || "Something went wrong fetching the data!");
        }

        return myWeathers;
    }
    catch(error){
        throw new Error(error);
    }
}



async function addToWeatherList(city_name, country_code, latitude, longitude, user_id){
    try {
        const { data, error } = await supabase
        .from('myWeathers')
        .insert([{ city_name, country_code, latitude, longitude, user_id }])

        if(error){
            throw new Error(error.message || "Something went wrong adding the data!");
        }

        // console.log(data);  
        return data;
    }
    catch(err){
        throw new Error(err);
    }
}







export { signUp, logIn, logOut, fetchUsersWeatherList, addToWeatherList }