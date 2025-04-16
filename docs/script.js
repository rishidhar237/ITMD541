body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.9)), url("tip-calculator-img.avif") no-repeat center center fixed;
    background-size: cover;
  }
  
  .overlay {
    min-height: 100vh;
    padding: 60px 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: rgba(255, 255, 255, 0.8);
  }
  
  .container {
    max-width: 550px;
    width: 95%;
    background: #ffffff;
    padding: 35px 30px;
    border-radius: 25px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
    border: 2px solid #ffe0f0;
    background-image: linear-gradient(145deg, #fdfbfb, #ebedee);
  }
  
  .logo {
    width: 65px;
    display: block;
    margin: 0 auto 15px;
  }
  
  h1 {
    text-align: center;
    color: #d63384;
    margin-bottom: 30px;
    font-size: 28px;
  }
  
  form label {
    display: block;
    margin-top: 18px;
    font-weight: bold;
    color: #333;
  }
  
  form input[type="text"],
  form select {
    width: 100%;
    padding: 12px;
    margin-top: 6px;
    border-radius: 12px;
    border: 1.5px solid #e6e6e6;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05);
    font-size: 16px;
    transition: border 0.3s;
  }
  
  form input[type="text"]:focus {
    border-color: #d63384;
    outline: none;
  }
  
  input:disabled {
    background-color: #f9f9f9;
    color: #666;
    border-color: #ddd;
  }
  
  input[type="range"] {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 12px;
    border-radius: 10px;
    background: linear-gradient(to right, #ff6ec4, #7873f5);
    margin-top: 8px;
    cursor: pointer;
    outline: none;
  }
  
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    border: 3px solid #d63384;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
  
  input[type="range"]::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    border: 3px solid #d63384;
    cursor: pointer;
  }
  
  .range-label {
    font-size: 16px;
    font-weight: 600;
    margin-top: 6px;
    color: #5e5e5e;
  }
  
  select {
    background-color: #fefefe;
  }
  
  #conversionRateDisplay {
    margin-top: 10px;
    font-size: 14px;
    font-style: italic;
    color: #666;
  }
  
  #errorMsg {
    color: red;
    margin-top: 10px;
    font-size: 14px;
  }
  
  @media (max-width: 600px) {
    .container {
      padding: 20px;
    }
  
    h1 {
      font-size: 22px;
    }
  
    form input,
    form select {
      font-size: 14px;
    }
  }
  
