import styled from "styled-components";
import {motion} from 'framer-motion';
import { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom'

function Cuisine(){

    const [cuisine, setCuisine] = useState([]);
    const params = useParams();

    let myHeaders = new Headers();
    myHeaders.append("apikey", "qc9JLLWvNZYH2mnk7WYdXPstHvXGhDtw");

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    useEffect(()=>{
        getCuisine(params.type);
        console.log(cuisine) 
    },[params.type])

    const getCuisine = async (name) =>{
            const api = await fetch("https://api.apilayer.com/spoonacular/recipes/complexSearch?query="+name+"&number=9", requestOptions)
            const data = await api.json();
            console.log(data.results);
            setCuisine(data.results);
    }
    return(
        <Grid
            animate={{opacity:1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration: 0.5}}
        >
            {cuisine.map((item)=>{
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

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
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

export default Cuisine;