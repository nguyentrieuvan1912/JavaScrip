function calculateBMI() {
    const massMark = parseFloat(document.getElementById('massMark').value);
    const heightMark = parseFloat(document.getElementById('heightMark').value);
    const massJohn = parseFloat(document.getElementById('massJohn').value);
    const heightJohn = parseFloat(document.getElementById('heightJohn').value);
  
    if (!massMark || !heightMark || !massJohn || !heightJohn) {
      document.getElementById('result').textContent = "Nhập sai.";
      return;
    }
  
    const markBMI = massMark / (heightMark ** 2);
    const johnBMI = massJohn / (heightJohn ** 2);
  
    if (markBMI > johnBMI) 
    {
        document.getElementById('result').textContent = 
            `BMI'Mark= ${markBMI.toFixed(2)}\n BMI'John= ${johnBMI.toFixed(2)}.`;
    } else if (markBMI < johnBMI) {
         document.getElementById('result').textContent = 
             `BMI'Mark= ${markBMI.toFixed(2)}\n BMI'John= ${johnBMI.toFixed(2)}.`;
    } else {
        document.getElementById('result').textContent = 
             `BMI'Mark= ${markBMI.toFixed(2)}\n BMI'John= ${johnBMI.toFixed(2)}.`;
    }
  }
  