import React from 'react';
import '../style/style.css';
import Activity from './Activity';

class Main extends React.Component {
    constructor(props){
        super();
        this.state = {
            inputText: "",
            activities: []
        }
    }

    componentDidMount() {
        if(localStorage.activities){
            this.setState({activities: JSON.parse(localStorage.activities) || []});
        }
        window.addEventListener("beforeunload", this.handleUpdateLocalStorage);
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.handleUpdateLocalStorage);
    }

    handleChange = ({target}) => {
        let {value} = target;
        this.setState({inputText: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.inputText !== "") {
           let activity = {
               activityName: this.state.inputText,
               activityDays: []
           }
           this.setState({
               activities: [...this.state.activities, activity],
               inputText: ""
           })
        }
       
    }

    handleKeyDown = (event) => {
        if(event.keyCode === 13){
            this.handleSubmit(event);
        }
    }

    handleClick = (event) => {
        let {id, value} = event.target;
        let activities = this.state.activities;
        if( !activities[id].activityDays.includes(value)) {
           activities[id].activityDays.push(value); 
           
        }else {
            let index = activities[id].activityDays.findIndex(a => a === value);
            activities[id].activityDays.splice(index, 1);  
        }
        this.setState({activities});
       
    }

    handleUpdateLocalStorage = () => {
        localStorage.setItem("activities", JSON.stringify(this.state.activities));
    }

    handleRemove = ({target}) => {
        let {id} = target;
        console.log(id);
        this.setState((prevState) => ({activities: prevState.activities.filter((a) => a !== prevState.activities[id])}));
    }

    render() {
        return (
            <main className="my-12">
                <h1 className="text-center text-3xl font-bold text-blue-600">Monthly Activity Tracker!</h1>
                <div>
                    <form className="my-8" onSubmit={this.handleSubmit}>
                        <fieldset className="flex justify-center">
                            <input type="text" name="input" placeholder="eg: coding" className="rounded-md py-2 px-10 border-l-2 border-t-2 border-b-2 border-gray-300 outline-none focus:border-blue-400" onChange={this.handleChange} value={this.state.inputText} onKeyDown={this.handleKeyDown}/>
                            <input type="submit" value="Add Activity" className="bg-green-400 text-white p-2 cursor-pointer"/>
                        </fieldset>
                    </form>
                </div>
                <section className="px-80 my-12">
                    {
                        this.state.activities.length ? < Activity {...this.state} handleRemove={this.handleRemove} handleClick={this.handleClick}/> : ""
                    }
                </section>
            </main>
        )
    }
}

export default Main;