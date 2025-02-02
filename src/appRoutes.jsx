import { BrowserRouter as Router,Route,Routes,} from 'react-router-dom'
import { UsersPage } from './pages/usersPage/UsersPage'
import { DetailsPage } from './pages/detailsPage/DetailsPage'
import { StartPage } from './pages/startPage/startPage'

const AppRoutes = () => {

    return (

        <Router>
                <Routes>
                    <Route
                        path="/"
                        element={

                            <StartPage />

                        }
                    />
                    <Route
                        path="/userlist"
                        element={

                            <UsersPage />

                        }
                    />
                    <Route
                        path="/finduser"
                        element={

                            <DetailsPage/>

                        }
                    />
                </Routes>
        </Router>
    )
}

export default AppRoutes;