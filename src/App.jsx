import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/AuthContext";
import { CoordinatesProvider } from "./contexts/CoordinatesContext";
import { SearchProvider } from "./contexts/SearchContext";

const Homepage = lazy(() => import("./pages/Homepage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Account = lazy(() => import("./pages/Account"));
const MyWeather = lazy(() => import("./pages/MyWeather"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));


import Applayout from "./ui/Applayout";
import DetailedWeatherInfo from "./slices/dashboard/detailedWeatherInfo/DetailedWeatherInfo";
import LazySpinner from "./ui/LazySpinner";
import { Toaster } from "react-hot-toast";
import { TempScaleProvider } from "./contexts/TempScaleContext";
import { ThemeProvider } from "./contexts/ThemeContext";




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    }
  }
});



export default function App() {
  return (
    <QueryClientProvider client={queryClient} >

      <AuthProvider>
        <SearchProvider>
          <CoordinatesProvider>
            <TempScaleProvider>
              <ThemeProvider>
                <BrowserRouter>
                  <Suspense fallback={ <LazySpinner /> } >
                    <Routes>
                      <Route element={ <Applayout /> } >
                        <Route index element={ <Navigate replace to="homepage"  /> } />
                        <Route path="/homepage" element={ <Homepage /> }  />
                        <Route path="/account" element={ <Account /> } />
                        <Route path="/signup" element={ <CreateAccount /> } />
                        <Route path="/dashboard" element={ <Dashboard /> } />
                        <Route path="/dashboard/:moreInfo" element={ <DetailedWeatherInfo /> } />
                        <Route path="/myWeather" element={ <MyWeather /> } />
                        <Route path="*" element={ <NotFound /> } />
                      </Route>
                    </Routes> 
                  </Suspense>
                </BrowserRouter>
              </ThemeProvider>
            </TempScaleProvider>
          </CoordinatesProvider>
        </SearchProvider> 
      </AuthProvider>

      <Toaster toastOptions={{
        duration: 2000,
      }} />

    </QueryClientProvider>
  )
}
