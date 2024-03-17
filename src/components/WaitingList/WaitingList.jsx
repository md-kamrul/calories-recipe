import SingleWaitingList from "../SingleWaitingList";
import PropTypes from 'prop-types';

const WaitingList = ({ wantToCook }) => {
    return (
        <div className="w-[90%] mx-auto border border-[#28282833] rounded-2xl p-3">

            <div className="text-center w-full">
                <h1 className="text-[#282828] font-semibold text-2xl mb-6">
                    Want To Cook: <span>00</span>
                </h1>
                <hr className="border border-[#28282833] mb-4" />
            </div>

            <div className="w-full">
                <div className="text-[#878787]">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            <tr>
                                {
                                    wantToCook.map(singleWantToCook => <SingleWaitingList key={singleWantToCook.recipe_id} singleWantToCook={singleWantToCook}></SingleWaitingList>)
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

WaitingList.propTypes = {
    wantToCook: PropTypes.object
};

export default WaitingList;