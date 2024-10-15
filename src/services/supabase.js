import supabase from "../supabase/supabaseClient";



async function signUp({email, password, username}){

    if(!email || !password || !username) return;

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
            throw new Error(error);
        }

        return data;

    }
    catch(error) {
        throw new Error(error);
    }
}




async function logOut(){
    try{
        const { error } = await supabase.auth.signOut();

        if(error){
            console.log(error);
            throw new Error(error);
        }
    }
    catch(err){
        throw new Error(err);
    }

}


export { signUp, logOut }