import Main from "../pages/Main";
import Structure from "../pages/Structure";
import Courses from "../pages/Courses";
import Beaches from "../pages/Beaches";
import Contact from "../pages/Contact";

const paths = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Main 
  },
  {
    name: "Estrutura",
    path: "/structure",
    exact: false,
    component: Structure 
  },
  {
    name: "Cursos",
    path: "/courses",
    exact: false,
    component: Courses 
  },
  {
    name: "Praias",
    path: "/beaches",
    exact: false,
    component: Beaches 
  },
  {
    name: "Contato",
    path: "/contact",
    exact: false,
    component: Contact 
  },
]

export default paths;