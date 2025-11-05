const audio = document.querySelector('audio')
const check = document.querySelector('#check')
audio.src = 'sound/os_animais.mp3'
document.querySelector('form').addEventListener('submit', () => {
    if (check.checked) return

    audio.currentTime = 0
    audio.play()
})