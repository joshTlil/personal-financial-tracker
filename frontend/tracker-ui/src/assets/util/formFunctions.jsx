import { useState } from 'react';
const [incomeAmount, setIncomeAmount] = useState("");
import "../css/form.css";

// I can not use this function because of some react rule
function incomeOption(incomeType){
    {if(incomeType === "Hourly" || incomeType === "Commission")
    return(
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

    {if(incomeType === "Salary")
        return(
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

}


export default incomeOption;