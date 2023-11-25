// TOGGLE THEME
const toggleTheme = document.querySelector('.toggle')
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

// START GAME
const start = document.querySelector('button')
start.addEventListener('click', () => {
    start.parentNode.classList.remove('start')
})

// CHOSING HAND
const hands = document.querySelectorAll('.hand')
hands.forEach(hand => {
    hand.addEventListener('click', () => {
        // DEFAULT HANDS
        const user = document.getElementById('user')
        const cpu = document.getElementById('cpu')
        const text = document.querySelector('p')
        user.className = 'fa-regular fa-hand-back-fist'
        cpu.className = 'fa-regular fa-hand-back-fist'
        text.innerText = 'Wait...'
        text.id = 'red'
        // MARK SELECTED HAND
        removeSelectedHands()
        hand.classList.add('select')
        // SHAKE-HAND ANIMATION
        const showingHands = document.querySelector('.showing-hands')
        showingHands.classList.add('shake')
        setTimeout(() => {
            showingHands.classList.remove('shake')
            // GENRATE CPU HAND
            generateHand(hand.classList)
        }, 1800)
    })
})

function removeSelectedHands() {
    hands.forEach(hand => hand.classList.remove('select'))
}

function generateHand(userClass) {
    const user = document.getElementById('user')
    const cpu = document.getElementById('cpu')
    const text = document.querySelector('p')
    // 
    // CPU HAND
    const genrate = Math.ceil(Math.random() * 3) - 1;
    // SET CLASS
    user.className = userClass
    user.classList.remove('select', 'hand')
    switch (genrate) {
        case 0:
            cpu.className = 'fa-regular fa-hand-back-fist'
            break;
        case 1:
            cpu.className = 'fa-regular fa-hand'
            break;
        case 2:
            cpu.className = 'fa-regular fa-hand-scissors'
            break;
        default:
            cpu.className = 'fa-regular fa-hand-back-fist'
            break;
    }
    // WHO IS WINNER
    let winner = ''
    const cpuClassTest = cpu.className
    const userClassTest = user.className
    console.log(cpuClassTest);

    if (cpuClassTest == 'fa-regular fa-hand-back-fist' && userClassTest == 'fa-regular fa-hand-back-fist') winner = 'none'
    else if (cpuClassTest == 'fa-regular fa-hand-back-fist' && userClassTest == 'fa-regular fa-hand') winner = 'user'
    else if (cpuClassTest == 'fa-regular fa-hand-back-fist' && userClassTest == 'fa-regular fa-hand-scissors') winner = 'cpu'
    else if (cpuClassTest == 'fa-regular fa-hand' && userClassTest == 'fa-regular fa-hand-back-fist') winner = 'cpu'
    else if (cpuClassTest == 'fa-regular fa-hand' && userClassTest == 'fa-regular fa-hand') winner = 'none'
    else if (cpuClassTest == 'fa-regular fa-hand' && userClassTest == 'fa-regular fa-hand-scissors') winner = 'user'
    else if (cpuClassTest == 'fa-regular fa-hand-scissors' && userClassTest == 'fa-regular fa-hand-back-fist') winner = 'user'
    else if (cpuClassTest == 'fa-regular fa-hand-scissors' && userClassTest == 'fa-regular fa-hand') winner = 'cpu'
    else if (cpuClassTest == 'fa-regular fa-hand-scissors' && userClassTest == 'fa-regular fa-hand-scissors') winner = 'none'

    if (winner == 'user') {
        text.innerText = 'User Won!'
        text.id = 'green'
    }
    else if (winner == 'cpu') {
        text.innerText = 'Cpu Won!'
        text.id = 'red'
    }
    else if (winner == 'none') {
        text.innerText = 'Match Draw!'
        text.id = 'red'
    }
    else if (winner == '') {
        window.location.reload()
    }
}