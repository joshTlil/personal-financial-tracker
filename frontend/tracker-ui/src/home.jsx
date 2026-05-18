import ProgressTracker from "./progressTracker.jsx";
import {Link} from "react-router-dom";
function Home() {
    return (
        <div>
            <h1>Welcome To Finical Tracker!</h1>
            <Link to="/form">
                Form
            </Link>
            <ProgressTracker currentAmount={2} goalAmount={2}/>
        </div>
    );
}

export default Home;