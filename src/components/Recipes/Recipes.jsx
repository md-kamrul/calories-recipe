import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({ clickWantToCook}) => {

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    return (
        <div className="">
            <div className="grid grid-cols-1 gap-4">
            {
                    recipes.map((recipe, idx) =>
                        <Recipe key={idx} recipe={recipe} clickWantToCook={clickWantToCook}></Recipe>)
                }
            </div>
        </div>
    );
};

Recipes.propTypes = {
    clickWantToCook: PropTypes.func
}

export default Recipes;