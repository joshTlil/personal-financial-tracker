import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./assets/css/form.css";

function InfoForm(){
    const [incomeType, setIncomeType] = useState("");
    const [incomeAmount, setIncomeAmount] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem('incomeType', JSON.stringify({incomeType}));
        navigate("/home", {state: {incomeType}});
    }

    return (
        <div className="form-page">
            <form className="info-form" onSubmit={handleSubmit}>
                <h2>Income Information</h2>

                <div className="form-group">
                    <p>What type of income do you have?</p>
                    <label>
                        <input type="radio" name="incomeType" value="Hourly"
                               onChange={(e) => setIncomeType(e.target.value)}/>
                        Hourly
                    </label>
                    <label>
                        <input type="radio" name="incomeType" value="Salary"
                               onChange={(e) => setIncomeType(e.target.value)}/>
                        Salary
                    </label>
                    <label>
                        <input type="radio" name="incomeType" value="Commission"
                               onChange={(e) => setIncomeType(e.target.value)}/>
                        Commission
                    </label>
                </div>
                {/*I can't do this,code right here will throw an error*/}
                {/*{incomeOption(incomeType)}*/}
                {(incomeType === "Hourly" || incomeType === "Commission") && (
                    <div className="form-group">
                    <label>
                    What is your monthly income goal?
                    </label>
                    <input
                    type="number"
                    placeholder="Enter monthly income goal"
                    value={incomeAmount}
                onChange={(e) => setIncomeAmount(e.target.value)}
            />
        </div>
                )}
                {(incomeType === "Salary") &&(
                <div className="form-group">
                    <label>
                        What is your monthly salary?
                    </label>
                    <input
                        type="number"
                        placeholder="Enter monthly salary?"
                        value={incomeAmount}
                        onChange={(e) => setIncomeAmount(e.target.value)}
                    />
                </div>
                )}
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default InfoForm;