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


export { signUp, logIn, logOut }