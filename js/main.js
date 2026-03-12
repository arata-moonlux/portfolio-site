// ===============================
// ★ モバイルメニュー開閉
// ===============================
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');
  const hamburger = document.getElementById('hamburger');

  if (!menu || !overlay || !hamburger) return;

  menu.classList.toggle('open');
  overlay.classList.toggle('open');
  hamburger.classList.toggle('open');
}


// ===============================
// ★ 背景の星を生成
// ===============================
function createStars() {
  const container = document.getElementById('stars-container');
  if (!container) return;

  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 70 + '%';
    container.appendChild(star);
  }
}
// ==============================
// お問い合わせ
// ==============================
document.addEventListener("DOMContentLoaded", function () {

  // DOMまとめて取得
  const form = document.getElementById("contact-form");
  if (!form) return;
  const content = document.getElementById("contact-content");
  const success = document.getElementById("success-message");

  const inputs = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    message: document.getElementById("message")
  };

  const errors = {
    name: document.getElementById("name-error"),
    email: document.getElementById("email-error"),
    message: document.getElementById("message-error")
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // エラー表示切り替え関数
  function showError(field, show) {
    if (show) {
      errors[field].classList.remove("is-hidden");
    } else {
      errors[field].classList.add("is-hidden");
    }
  }

  // 入力中にエラー消す
  Object.keys(inputs).forEach(key => {
    inputs[key].addEventListener("input", () => showError(key, false));
  });

  // submitイベント
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // バリデーション
    if (!inputs.name.value.trim()) {
      showError("name", true);
      isValid = false;
    }
    if (!inputs.email.value.trim() || !emailRegex.test(inputs.email.value.trim())) {
      showError("email", true);
      isValid = false;
    }
    if (!inputs.message.value.trim()) {
      showError("message", true);
      isValid = false;
    }

    // 成功時
    if (isValid) {

      emailjs.sendForm(
        "service_vciyoap",
        "template_pcbomfu",
        form
      ).then(function () {

        content.classList.add("is-hidden");
        success.classList.remove("is-hidden");

        form.reset();

      }, function (error) {

        alert("送信に失敗しました");

      });

    }
  });

});


// ===============================
// ★ 初期実行
// ===============================
createStars();

