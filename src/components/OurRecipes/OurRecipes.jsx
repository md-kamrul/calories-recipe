import Recipes from "../Recipes/Recipes";

const OurRecipes = () => {
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
            <div className="flex flex-col md:flex-row justify-between">

                {/* recipes */}
                <div>
                    <Recipes></Recipes>
                </div>

                {/* cooking list */}
                <div>
                    <h1>recipes llist</h1>

                </div>

            </div>

        </div>
    );
};

export default OurRecipes;