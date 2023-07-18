import Icon from '../assets/dummyIcon.png';

const Card = () =>{
    return (
        <div className = "h-[400px] min-w-[400px] ">
            <div className = "flex flex-col items-center justify-between h-full">
                <div>
                    <img src = {Icon}/>
                </div>
                <div className = "text-5xl p-4 pop">
                    London | 19C
                </div>
            </div>
        </div>
    )
};

export default Card;