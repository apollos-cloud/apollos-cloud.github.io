import { Route, Routes } from "react-router-dom"
import {pagesRoute} from "./pages"

export const App = () => <Routes>
  {
    pagesRoute.map(({ Page, path }) => <Route path={path} key={path} element={<Page />}/>)
  }
</Routes>
