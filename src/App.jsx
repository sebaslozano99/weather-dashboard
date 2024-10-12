import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Homepage from "./pages/Homepage";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Applayout from "./ui/Applayout";
import MyWeather from "./pages/MyWeather";
import { CoordinatesProvider } from "./contexts/CoordinatesContext";
import { SearchProvider } from "./contexts/SearchContext";
import DetailedWeatherInfo from "./slices/dashboard/detailedWeatherInfo/DetailedWeatherInfo";




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

      <SearchProvider>
        <CoordinatesProvider>
          <BrowserRouter>
            <Routes>
              <Route element={ <Applayout /> } >
                <Route index element={ <Navigate replace to="homepage"  /> } />
                <Route path="/homepage" element={ <Homepage /> }  />
                <Route path="/users" element={ <Users /> } />
                <Route path="/dashboard" element={ <Dashboard /> } />
                <Route path="/dashboard/:moreInfo" element={ <DetailedWeatherInfo /> } />
                <Route path="/myWeather" element={ <MyWeather /> } />
                <Route path="*" element={ <NotFound /> } />
              </Route>
            </Routes> 
          </BrowserRouter>
        </CoordinatesProvider>
      </SearchProvider> 

    </QueryClientProvider>
  )
}
