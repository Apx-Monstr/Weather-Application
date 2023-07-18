import logo from './logo.svg';
import './App.css';
import Card from '../src/components/Card';
import {useState} from 'react';
import axios from 'axios';


function App() {
    const [inputvalue, setInputValue] = useState('');
    const [cityList, setCityList] = useState([]);
    const [weather, setWeather] = useState({});
    
    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }

    const onSubmit = (event) =>{
        const vals = inputvalue.split(",");
        setCityList((prevItems) => [...prevItems, ...vals]);
        fetchWeather();
        setInputValue('');
    }

    const fetchWeather = ()=>{
        console.log(cityList)
        axios.get("http://localhost:8080/getWeather", {cities:"London"})
        .then((response)=>{
            console.log(response.data);
        })
        .catch((response)=>{
            console.log("Error Occured")
        })
    }

  return (
    <div className="bg-slate-950 h-[100vh] flex justify-items-center">
		<div className = "bg-slate-900 max-w-[500px] w-[500px] h-[85vh] m-auto rounded">
			<div className = "text-white pop gap-8 w-full flex flex-col h-[85vh]">
				<div className = "text-6xl text-center p-8">
					Weather App
				</div>
                {/* <ul>
        {cityList.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
    </ul> */}
                <div className = "p-10 flex-row flex gap-10 overflow-x-auto object-contain">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className = "">
                    <div className= "flex text-xl">
                        <input type="text" value={inputvalue} onChange={onInputChange} className="p-4 flex-1 focus:outline-0 bg-slate-900" placeholder = "Enter comma(,) seperated city"/>
                        <button className = "bg-red-500 px-8 rounded" onClick={onSubmit}>Submit</button>
                    </div>
                </div>
			</div>
		</div>
    </div>
  );
}

export default App;
