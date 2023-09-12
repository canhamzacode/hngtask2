import { Route, Routes } from "react-router"
import Hero from "./components/Hero/Hero"
import Home from "./page/Home"
import SpecificData from "./page/SpecificData"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })
  return (
    <QueryClientProvider client={client}>
      <Routes>
        <Route path="/" element={""}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<SpecificData />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
