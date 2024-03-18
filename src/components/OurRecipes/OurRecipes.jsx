import { useState } from "react";
import Recipes from "../Recipes/Recipes";
import WaitingList from "../WaitingList/WaitingList";
import PropTypes from 'prop-types';
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OurRecipes = () => {

    const [wantToCook, setWantToCook] = useState([]);
    const [preparingToCook, setPreparingToCook] = useState([]);

    const clickWantToCook = recipe => {

        const isExist = wantToCook.find(item => item.recipe_id == recipe.recipe_id);
        if (!isExist) {
            let newWantToCook = [...wantToCook, recipe];
            setWantToCook(newWantToCook);
        }
        else {
            toast("already exist...");
        }

    }


    const clickPreparing = (gotRecipe) => {
        const remaining = wantToCook.filter(wantToCookSingle => wantToCookSingle.recipe_id !== gotRecipe.recipe_id);
        setWantToCook(remaining);

        let newPreparing = [...preparingToCook, gotRecipe];
        setPreparingToCook(newPreparing);
    }

    return (
        <div className="mb-12">

            <div className="text-center">
                <h2 className="font-semibold text-[40px] mb-8">
                    Our Recipes
                </h2>
                <p className="font-normal mb-12">
                    Welcome to our recipe collection, a treasure trove of delicious dishes waiting to be explored! Whether <br />you are a seasoned chef or a kitchen novice, we have something to tempt your taste buds.
                </p>
            </div>

            {/* recipes body */}
            <div className="flex flex-col md:flex-row gap-4">

                {/* recipes */}
                <div className="">
                    <Recipes clickWantToCook={clickWantToCook}></Recipes>
                </div>

                {/* cooking list */}
                <div className="w-[60%] mx-auto flex flex-col gap-5">
                    <div className="w-full">
                        <WaitingList wantToCook={wantToCook} clickPreparing={clickPreparing}></WaitingList>
                    </div>
                    <div>
                        <CurrentlyCooking preparingToCook={preparingToCook}></CurrentlyCooking>
                    </div>
                </div>

            </div>

        </div>
    );
};

OurRecipes.propTypes = {
    clickWantToCook: PropTypes.func
}

export default OurRecipes;