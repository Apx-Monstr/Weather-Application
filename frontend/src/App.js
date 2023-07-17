import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-slate-950 h-[100vh] flex justify-items-center">
		<div className = "bg-slate-900 max-w-[500px] w-[500px] h-[85vh] m-auto rounded">
			<div className = "text-white pop w-full flex align-items-center flex-col gap-4">
				<div className = "text-4xl text-center bg-red-500 py-4">
					Weather App
				</div>
                <div className = "bg-blue-500">
                    Hello
                </div>
			</div>
		</div>
    </div>
  );
}

export default App;
