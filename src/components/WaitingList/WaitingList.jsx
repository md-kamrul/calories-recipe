const WaitingList = () => {
    return (
        <div className="w-[90%] mx-auto border border-[#28282833] rounded-2xl p-3">

            <div className="text-center">
                <h1 className="text-[#282828] font-semibold text-2xl mb-6">
                    Want To Cook: <span>00</span>
                </h1>
                <hr className="border border-[#28282833] mb-4" />
            </div>

            <div className="">
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
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Chicken Caesar Salad</td>
                                <td>20 minutes</td>
                                <td>400 calories</td>
                                <td>
                                    <div className="card-actions">
                                        <button className="btn bg-[#0BE58A] border-2 border-[#0BE58A] hover:bg-[#0be58a65] hover:border-[#0BE58A] text-[#150B2B] mr-6 rounded-[50px] font-semibold">Preparing</button>
                                    </div>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default WaitingList;