import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter, Link } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  {/* const [recipes, setRecipes] = useState("");
  const [res, setRes]= useState([]);
  let myHeaders = new Headers();
    myHeaders.append("apikey", "qc9JLLWvNZYH2mnk7WYdXPstHvXGhDtw");

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
  const Cooking = (id)=>{
    fetch("https://api.apilayer.com/spoonacular/recipes/"+id+"/information?includeNutrition=includeNutrition", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

  const searchForRec=()=>{
  fetch("https://api.apilayer.com/spoonacular/recipes/complexSearch?query="+recipes+"&number=5", requestOptions)
    .then(response => response.json())
    .then(result =>{
      console.log(result.results)
      setRes(result.results);
      console.log("Res: \n"+res)
    }
    
     )
  .catch(error => console.log('error', error));
  }

  const RenderElements = () => {
    if (res.length === 0) {
      return <p>No data available</p>; // Display message if no data is fetched
    }

    return res.map(item => (
      <div key={item.id}>
        <h3>{item.title}</h3>
      </div>
    ));
  };




  return (
    <div className="App">
      <nav className='navbar navbar-expand-md navbar-dark bg-success'>
        <div className="container">
            <a href="#" className="navbarBrand navbarBrand-lg"><GiCookingPot color='white' size={70}/></a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav"
            aria-controls="nav" aria-label="Expend Navigation">
                <div className="navbar-toggler-icon"></div>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link active" aria-current="page">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Store</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
     <h2 className='display-5 mt-3'>Search for recipes</h2>
     
      <input className="display-3 mt-5 border border-3 border-top-0 border-start-0 border-end-0" type="search" placeholder="Search"
      aria-label="Search" value={recipes}  onChange={e => setRecipes(e.target.value)}/>
      <button className="btn btn-primary" type="submit" onClick={searchForRec}>Search</button>
    <div className='card-container'>
        {res.map((recipes) => {
        return(
          <div className="card bg-dark text-light" key={recipes.id}>
            <img className="card-img-top" src={recipes.image} alt="Recipe"/>
            <div className="card-body">
            <h5 className="card-title">{recipes.title}</h5>
            <p className="card-text">{recipes.id}</p>
            <a href="#" className="btn btn-primary" onClick={()=>Cooking(recipes.id)}>Go for the recipe</a>
            </div>
          </div>
          
        );
      })}
    </div>
    <RenderElements/>
   
    </div>
  );*/}

  return(<div className='App'>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'} >delicious</Logo>
        </Nav>
        <Search/>
        <Category />
        <Pages />
      </BrowserRouter>
  
  </div>
   
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;

`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`
export default App;
