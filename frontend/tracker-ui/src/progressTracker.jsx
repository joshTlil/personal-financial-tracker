import "./assets/css/progressTracker.css";

function ProgressTracker({currentAmount = 0, goalAmount = 1000}){
    const progress = (currentAmount / goalAmount) * 100;
    const getInfo = localStorage.getItem('incomeType');
    const makeParse = JSON.parse(getInfo);
    const value = makeParse.incomeType;
    const overlayStyle = {
        background: `conic-gradient(
            #4caf50 ${progress}%,
            #d3d3d3 ${progress}%
        )`
    };

    return(

        <div>
            <h2>Income: {value}</h2>
            <div className="progress-bar-container">
                <div className="progress-bar-fill"
                     style={{width: `${progress}%`}}>
                </div>
                <span className="progress-bar-text">
                    0/420
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