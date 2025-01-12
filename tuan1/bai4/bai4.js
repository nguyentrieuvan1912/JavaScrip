function checkWinner() {
    // Lấy dữ liệu từ input
    const dolphinScores = [
      parseFloat(document.getElementById("dolphinScore1").value),
      parseFloat(document.getElementById("dolphinScore2").value),
      parseFloat(document.getElementById("dolphinScore3").value),
    ];
  
    const koalaScores = [
      parseFloat(document.getElementById("koalaScore1").value),
      parseFloat(document.getElementById("koalaScore2").value),
      parseFloat(document.getElementById("koalaScore3").value),
    ];
  
    // Tính điểm trung bình
    const averageDolphins = dolphinScores.reduce((a, b) => a + b, 0) / dolphinScores.length;
    const averageKoalas = koalaScores.reduce((a, b) => a + b, 0) / koalaScores.length;
  
    // Kết quả so sánh
    let resultMessage = `Dolphins Average: ${averageDolphins.toFixed(2)}\nKoalas Average: ${averageKoalas.toFixed(2)}\n`;
  
    if (averageDolphins >= 100 && averageDolphins > averageKoalas) {
      resultMessage += "Dolphins win the trophy!";
    } else if (averageKoalas >= 100 && averageKoalas > averageDolphins) {
      resultMessage += "Koalas win the trophy!";
    } else if (
      averageDolphins >= 100 &&
      averageKoalas >= 100 &&
      averageDolphins === averageKoalas
    ) {
      resultMessage += "It's a draw! Both teams win the trophy.";
    } else {
      resultMessage += "No team wins the trophy.";
    }
  
    // Hiển thị kết quả
    document.getElementById("result").textContent = resultMessage;
  }
  