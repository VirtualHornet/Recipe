import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

function Searched (){

    const [searched, setSearched] = useState([]);
    let params = useParams();

    let myHeaders = new Headers();
    myHeaders.append("apikey", "qc9JLLWvNZYH2mnk7WYdXPstHvXGhDtw");

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    useEffect(()=>{
        getSearched(params.search);
        console.log(searched) 
    },[params.search])

    const getSearched = async (name) =>{
        const api = await fetch("https://api.apilayer.com/spoonacular/recipes/complexSearch?query="+name+"&number=9", requestOptions)
        const data = await api.json();
        console.log(data.results);
        setSearched(data.results);
    }   

    return(
        <Grid>
            {searched.map((item)=>{
                return(
                    <Card key={item.id}>
                         <Link to={'/recipe/'+item.id}>
                            <img src={item.image} alt="img"/>
                            <h4>{item.title}</h4>
                         </Link>
                    </Card>
                );
            })}

        </Grid>
    )
}
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    @media screen and (max-width:550px){
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }
`;

const Card = styled.div`
    img{width: 100%;
    border-radius: 2rem;}
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`


export default Searched;