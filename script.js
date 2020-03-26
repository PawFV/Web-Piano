
window.addEventListener('keydown', function (e) {
    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    isAudio()
})
window.addEventListener('click', function (r) {
    audio = document.querySelector(`audio[data-key="${r.path[1].getAttribute('data-key')}"]`)
    key = document.querySelector(`div[data-key="${r.path[1].getAttribute('data-key')}"]`)
    isAudio()
})

function isAudio() {
    if (!audio) {
        return
    } else {
        playAudio()
    }
}

function playAudio() {
    audio.currentTime = 0
    audio.play()
    addTransitionClass()
}

function addTransitionClass() {
    key.classList.add('playing')
    removeTransitionClass()
}

function removeTransitionClass() {
    setTimeout(() => {
        key.classList.remove('playing')
    }, 100);

}