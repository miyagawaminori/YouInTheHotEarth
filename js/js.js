// Google Apps Script の公開URL（あなたのURLに置き換えてね）
const GAS_URL = "https://script.google.com/macros/s/AKfycbxTFqhR8aP-jst_ZBrmO3ZTEi-7_fSBKC0-Tgsztj4q2UBUxIglTSNahygffW22BPVf/exec";

fetch(GAS_URL)
  .then(response => response.text())
  .then(count => {
    const temperature = (parseInt(count) * 0.3).toFixed(1); // 1人あたり0.3℃上昇
    const message = `あなたは ${count} 人目です。部屋の温度は ${temperature}℃ 上昇しました。`;
    document.getElementById("message").textContent = message;
  })
  .catch(error => {
    console.error("エラー:", error);
    document.getElementById("message").textContent = "読み込みに失敗しました。";
  });