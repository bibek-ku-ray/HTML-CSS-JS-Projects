let songIndex = 0;
let audioElement = new Audio('Resourses/songs/Long-Time-No-See.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')

let songs = [
    {
        songName: 'Long Time No See', 
        filePath: 'Resourses/songs/Long-Time-No-See.mp3',
        coverPath: 'Resourses/pictures/Long time no see.png'
    },
    {
        songName: 'Teri Yaad', 
        filePath: 'Resourses/songs/Teri-Yaad.mp3',
        coverPath: 'Resourses/pictures/Teri Yaad.png'
    },
    {
        songName: 'Tu Hai Kahan', 
        filePath: 'Resourses/songs/Tu-Hai-Kahan.mp3',
        coverPath: 'Resourses/pictures/Tu hai kahan.png'
    },
]

//Handling play and pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})


//Listen to the event
//seekbar
audioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);

    myProgressBar.value = progress
})

myProgressBar.addEventListener(('change'), ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100;
})