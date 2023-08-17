// function updateSignalStrength() {
//     fetch('/get_signal')
//         .then(response => response.json())
//         .then(data => {
//             const signalStrengthElement = document.getElementById('signal-strength');
//             signalStrengthElement.textContent = `${data.strength}`;

//             updateRunnerPosition(data.strength);
//         });
// }

// function updateRunnerPosition() {

//     const runner = document.querySelector('.runner');

//     let newPosition = (strength / 100)
//     fetch('/get_signal')
//         .then(response => response.json())
//         .then(data => {
//             const runner = document.querySelector('.runner');

//             let newPosition = (data.strength / 100) * 90;  // 90%는 목적지 바로 앞까지의  거리
//             runner.style.left = `calc(${newPosition}% - 100px)`;
            
//             if (data.strength >= 50) {
//                 runner.classList.add('running');
//             } else {
//                 runner.classList.remove('running');
//             }
//         });
// }

// setInterval(updateSignalStrength, 1000);
// setInterval(updateRunnerPosition, 1000);

// //============================================
// function updateSignalStrength() {
//     fetch('/get_signal')
//         .then(response => response.json())
//         .then(data => {
//             const signalStrengthElement = document.getElementById('signal-strength');
//             signalStrengthElement.textContent = `${data.strength}`;
//             updateRunnerPosition(data.strength); // 위치 업데이트 함수에 신호 강도를 전달
//         });
// }

// function updateRunnerPosition(strength) {
//     const runner = document.querySelector('.runner');
//     let newPosition = (strength / 100) * 90;  // 와이파이 신호 강도에 따라 캐릭터 위치 계산
    
//     runner.style.left = `calc(${newPosition}% - 100px)`; // 캐릭터의 새 위치를 설정

//     if (strength >= 50) {
//         runner.classList.add('running');
//     } else {
//         runner.classList.remove('running');
//     }
// }

// setInterval(updateSignalStrength, 1000); // 1초마다 와이파이 신호 강도를 업데이트


function updateSignalStrength() {
    fetch('/get_signal')
        .then(response => response.json())
        .then(data => {
            const signalStrengthElement = document.getElementById('signal-strength');
            signalStrengthElement.textContent = `${data.strength}`;

            updateRunnerPosition(data.strength);
        });
}
function updateRunnerPosition(strength) {
    const runner = document.querySelector('.runner');

    let newPosition = (strength / 100) * 90; 
    runner.style.left = `calc(${newPosition}% - 100px)`; // 천천히 이동

    if (strength >= 50) {
        runner.classList.add('running');
    } else {
        runner.classList.remove('running');
    }
}

// 페이지가 로드될 때 한 번만 실행
updateSignalStrength();
// 그 이후에는 주기적으로 실행
setInterval(updateSignalStrength, 1000);


