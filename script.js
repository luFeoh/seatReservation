// 스크립트를 여기에 작성
document.addEventListener('DOMContentLoaded', () => {
    const seatsContainer = document.getElementById('seats');

    for (let i = 0; i < 20; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.textContent = i + 1;

        seat.addEventListener('click', () => {
            seat.classList.toggle('reserved');
        });

        seatsContainer.appendChild(seat);
    }
});
