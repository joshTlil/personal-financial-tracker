import ProgressTracker from "./progressTracker.jsx";
function Home() {
    return (
        <div>
            <h1>Welcome To Finical Tracker!</h1>
            <ProgressTracker currentAmount={300} goalAmount={1000}/>
        </div>
    );
}

export default Home;