import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import incomeOption from "./assets/util/formFunctions.jsx";

function InfoForm(){
    const [incomeType, setIncomeType] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        //
        navigate("/");
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
                {incomeOption(incomeType)}
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default InfoForm;