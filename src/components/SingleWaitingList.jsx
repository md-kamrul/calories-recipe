import PropTypes from 'prop-types';

const SingleWaitingList = ({ singleWantToCook, clickPreparing }) => {

    const { recipe_id, recipe_name, preparing_time, calories } = singleWantToCook;

    if (singleWantToCook) {
        return (
            <div className='flex flex-row justify-between mb-2'>

                <div>{recipe_id}</div>
                <div>{recipe_name}</div>
                <div>{preparing_time}</div>
                <div>{calories}</div>
                <div>
                    <button onClick={() => clickPreparing(singleWantToCook)} className=" bg-[#0BE58A] border-2 border-[#0BE58A] hover:bg-[#0be58a65] hover:border-[#0BE58A] text-[#150B2B]  rounded-[50px] font-semibold text-[12px] p-2">Preparing</button>
                </div>

            </div>
        );
    }
    else {
        return 0;
    }
};

SingleWaitingList.propTypes = {
    singleWantToCook: PropTypes.array,
    clickPreparing: PropTypes.func
};

export default SingleWaitingList;