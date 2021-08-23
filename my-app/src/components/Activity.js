function Activity(props) {

    function getDays(m, y) {
        let daysInMonth = new Date(y, m, 0).getDate();
        let days = [];
        for(let i = 1; i <= daysInMonth; i++){
            days.push(i);
        }
        return days;
    }

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    let numberOfDays = getDays(month, year);
    let activities = props.activities;
    
    return (
        <>
        {
            activities.map((activity, i) => (
                <div className="flex shadow-custom p-4 mb-8 text-textColor relative rounded-md" key={i}>
                    <div className="flex-30 bg-custom flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold">{activity.activityName}</h3>
                        <h3 className="inline bg-monthColor text-white font-bold my-1 p-1 rounded-md">{months[month]}</h3>
                    </div>
                    <div className="flex flex-60 flex-wrap px-12">
                        {
                            numberOfDays.map((day, j) => (
                                
                                <button id={i} key={j} className={!activity.activityDays.includes(String(day)) ? "p-2 border-2 border-gray-300 flex-10  hover:border-blue-500 mx-1 my-2 rounded-md": "p-2 bg-green-500 text-white flex-10 mx-1 my-2 rounded-md"} value={day} onClick={(e) => props.handleClick(e)}>{day}</button>
                              
                            ))
                        }
                    </div>
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