function Activity(props) {

    //computing days in a specific month
    function getDays(m, y) {
        let daysInMonth = (((y % 400 === 0) && (y % 100 !== 0)) || (y % 4 === 0)) ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] : [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let days = [];
        for(let i = 1; i <= daysInMonth[m]; i++){
            days.push(i);
        }
        return days;
    }

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let {activities} = props;
    return (
        <>
        {
            activities.map((activity, i) => (
                <div className="min-w-min flex shadow-custom p-4 mb-8 text-textColor relative rounded-md" key={i}>
                    {/* Acivity Name and details */}
                    <div className="flex-30 bg-custom flex flex-col justify-center items-center">
                        <h4 className="text-xl font-bold">{activity.activityName}</h4>
                        <h4 className="inline bg-monthColor text-white font-bold my-1 p-1 rounded-md">{months[activity.month]}</h4>
                        <h4 className="text-blue-600 my-1 font-bold">{activity.year}</h4>
                    </div>

                    {/* Days in a month */}
                    <div className="flex flex-60 flex-wrap px-12">
                        {
                            getDays(activity.month, activity.year).map((day, j) => (
                                <button id={i} key={j} className={"p-2 border-2 border-gray-300 w-12 h-12 hover:border-blue-500 mx-1 my-2 rounded-md" + (activity.activityDays.includes(String(day)) ?  " bg-green-500 text-white": "")} value={day} onClick={(e) => props.handleClick(e)}>{day}</button>  
                            ))
                        }
                    </div>

                    {/* close button */}
                    <div className="absolute right-4">
                        <i className="fas fa-times-circle cursor-pointer text-red-400 text-2xl" id={i} onClick={(e) => props.handleRemove(e)}></i>
                    </div>
                </div>
            ))
        }
        </>
    )
}

export default Activity;