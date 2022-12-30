let now_playing = document.querySelector(".now-playing")
let track_art = document.querySelector(".track-art")
let track_name = document.querySelector(".track-name")
let track_artist = document.querySelector(".track-artist")

let playpause_btn = document.querySelector(".playpause-track")
let next_btn = document.querySelector(".next-track")
let prev_btn = document.querySelector(".prev_track")


let seek_slider = document.querySelector(".seek_slider")
let volume_slider = document.querySelector(".volume_slider")
let curr_time = document.querySelector(".current_time")
let total_duration = document.querySelector(".total-duration")

let track_index = 0;
let isPlaying = false
let updateTimer;


let curr_track = document.createElement('audio')

let track_list = [
    {
        name: "",
        artist: "",
        image: "",
        path:
    },
    {
        name: "",
        artist: "",
        image: "",
        path:
    },
    {
        name: "",
        artist: "",
        image: "",
        path:
    },
]

function loadTrack(track_index){
    clearInterval(updateTimer);
    resetValues();

    curr_track.src = track_list[track_index].path;
    curr_track.load();
    track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent = "Playing " + (track_index + 1) + " OF " + track_list.length;

    updateTimer = setInterval(seekUpdate, 1000);

    curr_track.addEventListener("ended", nextTrack);

    random_bg_color();
}

function random_bg_color() {
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;

    let bgColor = "rgb(" + red + ", " + green + ", " + blue +")";
    let bgColor2 = "rgb"+ str(set(red, gree, blue))
    console.log(bgColor2)

    document.body.style.background = bgColor;
}

function resetValues() {
    curr_time.textContent = "00:00"
    total_duration.textContent = "00:00"
    seek_slider.value = 0;
}