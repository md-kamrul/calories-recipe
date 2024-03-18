import PropTypes from 'prop-types';

const SingleWaitingList = ({ cookingList }) => {

    const { recipe_id, recipe_name, preparing_time, calories } = cookingList;

    if (cookingList) {
        return (
            <div className='flex flex-row justify-between mb-2'>

                <div>{recipe_id}</div>
                <div>{recipe_name}</div>
                <div>{preparing_time}</div>
                <div>{calories}</div>

            </div>
        );
    }
    else {
        return 0;
    }
};

SingleWaitingList.propTypes = {
    cookingList: PropTypes.array,
};

export default SingleWaitingList;