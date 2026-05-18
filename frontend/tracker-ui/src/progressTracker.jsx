import "./assets/css/progressTracker.css";
const getInfo = localStorage.getItem('userData');
const makeParse = JSON.parse(getInfo);
const income = Number(makeParse.userData.incomeAmount);
const payType = makeParse.userData.incomeType;

function ProgressTracker({currentAmount, income}){
    const progress = (currentAmount / income) * 100;
    const overlayStyle = {
        background: `conic-gradient(
            #4caf50 ${progress}%,
            #d3d3d3 ${progress}%
        )`
    };

    return(

        <div>
            <h2>Income Type: {payType}</h2>
            <div className="progress-bar-container">
                <div className="progress-bar-fill"
                     style={{width: `${progress}%`}}>
                </div>
                <span className="progress-bar-text">
                    0/{income}
                </span>
            </div>

        <div className="progress-container">
            <div className="progress-circle">
                {/*progress ring*/}
                <div className="progress-overlay" style={overlayStyle}></div>
                {/*Dollar Amount*/}
                <div className="progress-center">
                    <h2>${currentAmount}</h2>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProgressTracker