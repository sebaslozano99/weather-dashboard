import { createContext, useContext, useEffect, useReducer } from "react";
import supabase from "../supabase/supabaseClient";
import PropTypes from "prop-types";






const AuthContext = createContext();


const initialState = {
    user: null,
    // error: "",
    // isLoading: false,
}


function reducer(state, action){
    switch(action.type){
        case "user/signIn":
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            };
        
        case "user/signOut":
            return {
                ...state,
                isLoading: false,
                user: null,
            };
        
        // case "error/newError":
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: action.payload,
        //     };
        
        // case "isLoading/loading":
        //     return {
        //         ...state, 
        //         isLoading: true,
        //     };

        default: throw new Error("unknown action type!");
    }
}



function AuthProvider({children}) {

  const [{user}, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    supabase.auth.onAuthStateChange((e, session) => {
        if(e === "SIGNED_IN") dispatch({type: "user/signIn", payload: session.user});

        if(e === "SIGNED_OUT") dispatch({type: "user/signOut"});
    })
  }, [])




  return (
    <AuthContext.Provider value={{
        user,
    }} >
      { children }
    </AuthContext.Provider>
  )
}

export { AuthProvider, UseAuthContext }


function UseAuthContext(){
    const context = useContext(AuthContext);
    if(context === undefined) throw new Error("UseAuthContext is being used outside AuthProvier wrapper!");
    return context;
}


AuthProvider.propTypes = {
    children: PropTypes.node,
}