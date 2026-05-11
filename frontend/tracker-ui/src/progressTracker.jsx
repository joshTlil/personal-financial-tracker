import "./assets/css/progressTracker.css";

function ProgressTracker({currentAmount = 0, goalAmount = 1000}){
    const progress = (currentAmount / goalAmount) * 100;

    const overlayStyle = {
        background: `conic-gradient(
            #4caf50 ${progress}%,
            #d3d3d3 ${progress}%
        )`
    };

    return(
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
    )
}

export default ProgressTracker