import axios from "axios"
import {  useState } from "react"
import Cards from "../../components/cards/Cards"
import Header from "../../components/header/Header"
import HomeStyle, { HeaderText, HomeImg, ImgDiv } from "./Home.style"
import homeSvg from "../../assets/home.svg"

const Home = () => {
  const mealType=["Breakfast","Lunch","Dinner","Snack","Teatime"]

  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState(null)
  const [selectedMeal, setSelectedMeal] = useState(mealType[0])



  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`

  const getData=async()=>{
    if(query){
      try {
      const {data} = await axios(url)
      console.log(data);
      setRecipes(data.hits)
    } catch (error) {
      console.log(error);
    }

  }else{
    alert("Please enter your meal")
  }
    }

  return (
    <div>
    <Header getData={getData}  setQuery={setQuery} setSelectedMeal={setSelectedMeal} mealType={mealType} />
{!recipes && (<ImgDiv>
  <HomeImg src={homeSvg}/>
</ImgDiv>)
}
{recipes?.length===0 && (<HeaderText>The Food can not be found</HeaderText>)}


{recipes?.length> 0 && <Cards recipes={recipes}/>}
    </div>
  )
}

export default Home