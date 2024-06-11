document.addEventListener('DOMContentLoaded', () => {
    const seatMap = document.getElementById('seat-map');
    const reserveButton = document.getElementById('reserve-button');
    const changeSeatButton = document.getElementById('change-seat-button');
    const reservationForm = document.getElementById('reservation-form');
    const confirmButton = document.getElementById('confirm-button');
    const studentIdInput = document.getElementById('student-id');
    const studentNameInput = document.getElementById('student-name');

    const seats = [];
    let selectedSeat = null;
    let reservations = {};

    // 좌석 생성
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 6; col++) {
            if (row === 4 && col === 5) continue; // 6번째 열 5번째 행은 자리 없음
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.dataset.row = row;
            seat.dataset.col = col;
            seat.textContent = `${row + 1}-${col + 1}`;
            seat.addEventListener('click', () => {
                if (seat.classList.contains('reserved')) return;
                if (selectedSeat) selectedSeat.classList.remove('selected');
                seat.classList.add('selected');
                selectedSeat = seat;
            });
            seats.push(seat);
            seatMap.appendChild(seat);
        }
    }

    // 예약 버튼 클릭
    reserveButton.addEventListener('click', () => {
        reservationForm.classList.remove('hidden');
        studentIdInput.value = '';
        studentNameInput.value = '';
    });

    // 자리 변경 버튼 클릭
    changeSeatButton.addEventListener('click', () => {
        reservationForm.classList.remove('hidden');
        studentIdInput.value = '';
        studentNameInput.value = '';
    });

    // 예약 확정 버튼 클릭
    confirmButton.addEventListener('click', () => {
        const studentId = studentIdInput.value.trim();
        const studentName = studentNameInput.value.trim();

        if (!studentId || !studentName) {
            alert('학번과 이름을 입력하세요.');
            return;
        }

        if (reservations[studentId]) {
            alert('이미 예약된 학번입니다.');
            return;
        }

        if (selectedSeat) {
            selectedSeat.classList.add('reserved');
            reservations[studentId] = {
                name: studentName,
                seat: selectedSeat,
            };
            selectedSeat.classList.remove('selected');
            selectedSeat = null;
            reservationForm.classList.add('hidden');
        } else {
            alert('자리를 선택하세요.');
        }
    });
});
