document.addEventListener('DOMContentLoaded', () => {
 const cardImage = document.getElementById('card-image');
 const cards = ['cards/A.png', 'cards/B.png', 'cards/C.png', 'cards/D.png', 'cards/E.png', 'cards/F.png'];
 const yesButton = document.querySelector('.yes-button');
 const noButton = document.querySelector('.no-button');
 const resultDiv = document.getElementById('result');
 const cardContainer = document.getElementById('card-container');

 let step = 0;
 let total = 0;

 function showCard() {
 if (step < cards.length) {
 // Bắt đầu hiệu ứng mờ đi
 cardImage.style.opacity = 0;
 setTimeout(() => {
 cardImage.src = cards[`${step}`];
 // Bắt đầu hiệu ứng mờ hiện
 cardImage.style.opacity = 1;
 }, 300); // Đợi 300ms cho hiệu ứng mờ đi
 } else {
 cardContainer.innerHTML = `🎉 Số bạn nghĩ là: <strong>${total}</strong>`;
 document.querySelector('.buttons').style.display = 'none';
 }
 }

 function answer(isYes) {
 const value = 1 << step; // Tương đương Math.pow(2, step)
 if (isYes) {
 total += value;
 }
 step++;
 showCard();
 }

 yesButton.addEventListener('click', () => answer(true));
 noButton.addEventListener('click', () => answer(false));

 showCard(); // Hiển thị bảng đầu tiên khi trang tải
});