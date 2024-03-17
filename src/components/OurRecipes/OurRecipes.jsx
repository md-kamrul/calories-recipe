import { useState } from "react";
import Recipes from "../Recipes/Recipes";
import WaitingList from "../WaitingList/WaitingList";
import PropTypes from 'prop-types';

const OurRecipes = () => {

    const [wantToCook, setWantToCook] = useState([]);
    const clickWantToCook = recipe => {
        const newWantToCook = [...wantToCook, recipe];
        setWantToCook(newWantToCook);
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
                <div className="">

                    <WaitingList wantToCook={wantToCook}></WaitingList>

                </div>

            </div>

        </div>
    );
};

OurRecipes.propTypes = {
    clickWantToCook: PropTypes.func
}

export default OurRecipes;