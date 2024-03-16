import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('../../../public/recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    return (
        <div>
            <div className="grid grid-cols-2 gap-6">
                {
                    recipes.map(recipe =>
                        <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;