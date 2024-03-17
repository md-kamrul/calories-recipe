import PropTypes from 'prop-types';

const SingleWaitingList = ({ singleWantToCook }) => {

    const { recipe_name, preparing_time, calories } = singleWantToCook;

    return (
        <div>

            <th>{singleWantToCook.length}</th>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <td>
                {/* <div className="card-actions"> */}
                <button className="btn bg-[#0BE58A] border-2 border-[#0BE58A] hover:bg-[#0be58a65] hover:border-[#0BE58A] text-[#150B2B]  rounded-[50px] font-semibold text-[12px] p-2">Preparing</button>
                {/* </div> */}
            </td>

        </div>
    );
};

SingleWaitingList.propTypes = {
    singleWantToCook: PropTypes.array
};

export default SingleWaitingList;