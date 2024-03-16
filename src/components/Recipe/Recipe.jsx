import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";

const Recipe = ({ recipe }) => {

    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className='w-[80%] md:w-full mx-auto'>

            <div className="card w-96 border-2 border-[#28282833] ml-[10%] md:ml-0">
                <figure className="p-6">
                    <img src={recipe_image} alt="menu image" className="rounded-xl" />
                </figure>
                <div className="card-body text-[#282828CC] font-firaSans">
                    <h2 className="card-title text-[#282828]">{recipe_name}</h2>
                    <p className='text-[#878787]'>
                        {short_description}
                    </p>
                    <hr className='text-[#2828281A] mb-6' />
                    <p className='text-[Dark 02] font-medium text-lg mb-4'>Ingredinets: {ingredients.length}</p>
                    {/* ingredinets list */}
                    {
                        ingredients.map(ingredient =>
                            <ul>
                            <li>{ ingredient}</li>
                        </ul>)
                    }

                    <hr className='text-[#2828281A] mb-6' />
                    <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row gap-1 items-center'>
                        <IoMdTime />
                        <p>{preparing_time}</p>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <SlEnergy />
                        <p>{calories}</p>
                    </div>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-[#0BE58A] border-2 border-[#0BE58A] hover:bg-[#0be58a65] hover:border-[#0BE58A] text-[#150B2B] mr-6 rounded-[50px] mt-6 font-semibold text-lg">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object
};

export default Recipe;