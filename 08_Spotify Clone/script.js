let songIndex = 0;
let audioElement = new Audio('Resourses/songs/Long-Time-No-See.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songNameLeft = document.getElementById('songNameLeft')


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
    {
        songName: 'Long Time No See', 
        filePath: 'Resourses/songs/Long-Time-No-See.mp3',
        coverPath: 'Resourses/pictures/Long time no see.png'
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
    //console.log(progress);

    myProgressBar.value = progress
})

myProgressBar.addEventListener(('change'), ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100;
}) 


//not needed because name of the song is set manually here.
// songItems.forEach((element, i)=>{
//     console.log(`element is ${element}, i is ${i}`);
//     element.getElementsByTagName('img')[0].src = songs[i].coverPath;
//     element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
// })


const makeAllPlay = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay()
        songIndex = parseInt(e.target.id)
        
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        // audioElement.src = `Resourses/songs/${index+1}.mp3`
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')

        songNameLeft.innerHTML = songs[songIndex].songName;
        gif.style.opacity = 1;
        
    })
})

document.getElementById('nextSong').addEventListener('click', (e)=>{
    if(songIndex >= 5){
        songIndex = 0;
    } else {
        songIndex++;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')

    songNameLeft.innerHTML = songs[songIndex].songName;
    gif.style.opacity = 1;
})

document.getElementById('previousSong').addEventListener('click', (e)=>{
    if(songIndex <= 0){
        songIndex = 0;
    } else {
        songIndex--;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    console.log(audioElement.src);

    songNameLeft.innerHTML = songs[songIndex].songName;
    gif.style.opacity = 1;
})

