import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe (){

    const params = useParams();
    const [recipe, setRecipe] = useState({});
    const [activeTab, setActiveTab] = useState("instuctions");
    useEffect(()=>{
        fetchDetails(params.name);
        console.log(recipe)
    }, [params.name]);

    let myHeaders = new Headers();
    myHeaders.append("apikey", "qc9JLLWvNZYH2mnk7WYdXPstHvXGhDtw");

    let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };


    const fetchDetails = async (name) =>{
        const data = await fetch("https://api.apilayer.com/spoonacular/recipes/"+name+"/information?includeNutrition=includeNutrition", requestOptions);
        const res = await data.json();
        setRecipe(res);
    }

    return(
        <DeatilsWrapper>
            <div>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.id}/>
            </div>
            <Info>
                <Button className={(activeTab==="instuctions")?"active":""} onClick={()=>{setActiveTab("instuctions")}}>Instructions</Button>
                <Button className={(activeTab==="ingredients")?"active":""} onClick={()=>{setActiveTab("ingredients")}}>Ingredients</Button>
                {activeTab==="instuctions" && (
                    <div>{/*Transform Html elements from apis to text!!!!!*/}
                        <h3 dangerouslySetInnerHTML={{__html: recipe.summary}}></h3>
                        <h3 dangerouslySetInnerHTML={{__html: recipe.instructions}}></h3>
                    </div>
                )}
                {activeTab==="ingredients" && (
                    <ul>
                        {recipe.extendedIngredients.map(item=>{
                            return(
                                <li key={item.id}>{item.original}</li>
                            )
                        })}
                    </ul>
                )}
                
            </Info>
        </DeatilsWrapper>
    )
}


const DeatilsWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: #fff;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top: 2rem;
    }
    @media screen and (max-width: 1500px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        h2{
            text-align: center;
        }
    }
`
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: #fff;
    border-radius: 1rem;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`

const Info = styled.div`
    margin-left: 10rem;
    @media screen and (max-width: 1500px){
        margin: 0;
        width: 100%;
    }
`
export default Recipe;