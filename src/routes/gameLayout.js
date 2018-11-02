import Login from "../containers/Login/Login";
import Game from "../containers/Game/Game"

const gameLayoutRoutes =  [
    {
        path: "/game",
        component: Game
    },
    {
        path: "/login",
        component: Login
    },    
    {redirect:true,path: "/", to: "/login"}
]

export default gameLayoutRoutes;