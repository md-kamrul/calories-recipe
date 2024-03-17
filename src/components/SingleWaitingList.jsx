import PropTypes from 'prop-types';

const SingleWaitingList = ({ singleWantToCook, number }) => {

    const { recipe_name, preparing_time, calories } = singleWantToCook;

    return (
        <div className='flex flex-row gap-5 mb-2'>

            <div>{number}</div>
            <div>{recipe_name}</div>
            <div>{preparing_time}</div>
            <div>{calories}</div>
            <div>
                <button className=" bg-[#0BE58A] border-2 border-[#0BE58A] hover:bg-[#0be58a65] hover:border-[#0BE58A] text-[#150B2B]  rounded-[50px] font-semibold text-[12px] p-2">Preparing</button>
            </div>

        </div>
    );
};

SingleWaitingList.propTypes = {
    number: PropTypes.number,
    singleWantToCook: PropTypes.array
};

export default SingleWaitingList;