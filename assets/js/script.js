const pianokeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");
keysCheckBox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("/assets/audios/a.wav");

const playTune = (key) =>{
    audio.src = `/assets/audios/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active")
    }, 150);
}

pianokeys.forEach(key =>{
    allKeys.push(key.dataset.key)
    key.addEventListener("click", () =>
        playTune(key.dataset.key));
});

const showHideKeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

const handleVolume = (e) =>{
    audio.volume = e.target.value;
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key))playTune(e.key);
}

volumeSlider.addEventListener("input", handleVolume);
keysCheckBox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKey);