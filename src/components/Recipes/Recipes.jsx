import { useEffect, useState } from "react";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('../../../public/recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    return (
        <div>
            <h1>recipes</h1>
        </div>
    );
};

export default Recipes;