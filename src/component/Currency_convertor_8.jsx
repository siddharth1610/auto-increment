import React, { useEffect, useState } from "react";
import axios from "axios";

const Currency_convertor_8 = () => {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convert, setConvert] = useState(0);

  useEffect  (() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
          );
          //console.log(response);

          setRates(response.data.rates);
        } catch (error) {
          console.error("Error", error);
        }
      };
      fetchData();
    },
    [fromCurrency]);

const handleAmount=(e)=>{
  setAmount(e.target.value)

}
const handleFrom=(e)=>{
  setFromCurrency(e.target.value)

}
const handleTo=(e)=>{
  setToCurrency(e.target.value)

}
const handleConvert=()=>{
  const result = (amount*rates[toCurrency]).toFixed(2)
  setConvert(result)
}

  return (
    <div className="Currency_covertor">
      <h2>Currency-Convertor</h2>

      {/* Amount: */}
      <div>
        <label>
          Amount:
          <input type="number" 
          value={amount}
          onChange={handleAmount}/>
        </label>
      </div>

      {/* From Currency: */}
      <div>
        <label>
          From Currency:
          <select onChange={handleFrom} value={fromCurrency}>
            {Object.keys(rates).map((currency)=>
            <option key={currency} value={currency}>{currency}</option>
            )}
          </select>
        </label>
      </div>

      {/* TO Currency: */}
      <div>
        <label>
          To Currency:
          <select onChange={handleTo} value={toCurrency}>
            {Object.keys(rates).map((currency)=>
            <option key={currency} value={currency}>{currency}</option>
            )}
          </select>
        </label>
      </div>
      <button onClick={handleConvert}>Convert</button>

      {/* Result */}
      <div>
        {convert !== 0 &&(
        <p>{amount} {fromCurrency} equals {convert} {toCurrency}</p>
        )}
      </div>
    </div>
  );
};

export default Currency_convertor_8;
