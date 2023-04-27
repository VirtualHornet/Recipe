import { useEffect, useState } from "react";
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import {Link} from 'react-router-dom';
function Meat(){

    const [meat, setMeat] = useState([]);

    let myHeaders = new Headers();
    myHeaders.append("apikey", "qc9JLLWvNZYH2mnk7WYdXPstHvXGhDtw");

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    useEffect(()=>{
        getMeal(); 
    },[])

    const getMeal = async () =>{


        const check = localStorage.getItem("meat");
        if(check){
            setMeat(JSON.parse(check))
        }else{
            const api = await fetch("https://api.apilayer.com/spoonacular/recipes/complexSearch?query=meat&number=10", requestOptions)
            const data = await api.json();
            console.log(data.results);

            localStorage.setItem("meat", JSON.stringify(data.results))

            setMeat(data.results)
        }
      
    }

    return(
        <div>
            <Wrapper>
                <h3>Meaty Dishes</h3>
                <Splide 
                    options={{
                        perPage:4,
                        arrows: false,
                        drag: "free",
                        pagination: false,
                        gap: "2rem",
                        breakpoints: {
                            1000: { 
                                direction: 'ttb',
                                height:"100vh",
                                gap: "2rem"
                            }
                      }
                    }}
                >
                    {meat.map((recipe)=>{
                    return(
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={'/recipe/'+recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}/>
                                    <Gradient />
                                </Link>
                            </Card>
                        </SplideSlide>
                    )
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div `
    margin: 4rem 0;
`;

const Card = styled.div`
    height: auto;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    img{
        border-radius: 1rem;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 10;
        bottom: 0%;
        color: #fff;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), #000000);
`

export default Meat;