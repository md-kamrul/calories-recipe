import SingleWaitingList from "../SingleWaitingList";
import PropTypes from 'prop-types';

const WaitingList = ({ wantToCook }) => {
    return (
        <div className="w-[150%] md:w-[90%] md:mx-auto ml-[-20%] md:ml-0 border border-[#28282833] rounded-2xl p-3">

            <div className="text-center w-full">
                <h1 className="text-[#282828] font-semibold text-2xl mb-6">
                    Want To Cook: <span>{wantToCook.length}</span>
                </h1>
                <hr className="border border-[#28282833] mb-4" />
            </div>

            <div className="w-full">
                <div className="text-[#878787]">
                    <div className="w-full md:w-[80%] mx-auto flex flex-row justify-between items-center">
                        <div className="text-white ">Num</div>
                        <div>Name</div>
                        <div>Time</div>
                        <div>Calories</div>
                        <div className="text-white ">button</div>
                    </div>
                    <div>
                        {
                            wantToCook.map(singleWantToCook => <SingleWaitingList key={singleWantToCook.recipe_id} singleWantToCook={singleWantToCook} number={wantToCook.length}></SingleWaitingList>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

WaitingList.propTypes = {
    wantToCook: PropTypes.object
};

export default WaitingList;