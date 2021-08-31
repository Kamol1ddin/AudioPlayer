let musicPlayer = document.querySelector('.music_player')
let music = document.querySelector('#music')
let backwardBtn = document.querySelector('#backward')
let playBtn = document.querySelector('#play')
let forwardBtn = document.querySelector('#forward')
let musicImg = document.querySelector('.music_img')
let title = document.querySelector('#title')
let menu = document.querySelector('.menu')
let musicList = document.querySelector('.music_list')
let progressContainer = document.querySelector('.music_progress')
let progress = document.querySelector('.progress')
let musicMenu = document.querySelector('.music_menu')
let showVolume = document.querySelector('.show_volume')
let volume = document.querySelector('#volume')
let img = document.createElement('img')
let musicNum = document.querySelector('.music_num')
let allMusic = document.querySelector('.all_music')
let repeat = document.querySelector('.return') 

function updateProgress(e){
        const { duration, currentTime } = e.srcElement
        const progressPercent = (currentTime / duration) * 100
        progress.style.width = `${progressPercent}%`
}

function setProgress(e){
        const width = this.clientWidth
        const clickX = e.offsetX
        const duration = music.duration
        music.currentTime = (clickX / width) * duration
}

let listMusic = ['abu','andro','andy','bella','colorit','criminal','dusha','egor','elman','elman(1)','emin','faik','faik(1)','gafur','gafur(1)','hammali','jony','kangi','kangi(1)','konfuz','kostromin','krid','limba','love','madina','mambo','man','mana','miyagi','molod','morgen','ratata','rauf','rauf(1)','riad','rolls','sub','sultan','touch','urban']

let nameMusic = ['Abu Bandit','Jony & Andro - Мадам','Miyagi & Andy Panda - Kossandra','Bella Poarch - Buil a Bitch','Colorit - Быстро','Slow - Mama I am a criminal','Душа моя полна','Egor Krid & Morgenshtern - Весёлая песня','Elman - Лети','Jony & Elman - Кроссы','Jony & Emin - Камин','Rauf & Faik - Извини Меня','Rauf & Faik - Моя','Gafur & Elman - Морозы','Gafur - Ты не моя','HammAli & Navai - Ты моя химия','Jony - Лали','Kangi - Эйя','Kangi - возми сердце моё','Konfuz - Война','Kostromin - Моя голова винтом','Egor Krid - Деввочка с картинки','The Limba & Andro - X.O','Jony - Love your voice','Madina Jonim Mani','Mambo','Man kuchangdan utaman','Mana endi surang','Miyagi & Ендшпил - солнечные блики','Молод и глуп','Morgenshtern - Cristal & Мъёт','Konfuz - Ratata','Rauf & Faik - Wonderful','Rauf & Faik - Колыбелная','Riad - Payiz Gecesi','Egor Krid & Тимати - Rolls Royce','Sub Urban - Cardles','Султан Лагучев - Горъкий Звук','Touch It','Sub Urban - Freak']

let musicIndex = 0

loadsong(listMusic[musicIndex])

function showNum(){
        allMusic.innerHTML = listMusic.length   
        musicNum.innerHTML = musicIndex + 1
}

function loadsong(musics){
        title.innerHTML = musics
        music.setAttribute('src', `./musics/${musics}.mp3`)
        img.setAttribute('src', `./images/${musics}.jpg`)
        musicImg.append(img)  
}

function play(){
        musicPlayer.classList.add('play')
        playBtn.querySelector('i.fas').classList.remove('fa-play')
        playBtn.querySelector('i.fas').classList.add('fa-pause')
        img.classList.add('img_anim')
        musicImg.append(img)  
        showNum()
        music.play()
}

function pause(){
        musicPlayer.classList.remove('play')
        playBtn.querySelector('i.fas').classList.remove('fa-pause')
        playBtn.querySelector('i.fas').classList.add('fa-play')
        img.classList.remove('img_anim')
        musicImg.append(img) 
        music.pause()
}

function backwardMusic(){
        musicIndex--
        if(musicIndex < 0){
                musicIndex = listMusic.length - 1
        }
        loadsong(listMusic[musicIndex])
        play()
}

function forwardMusic(){
        musicIndex++
        if(musicIndex > listMusic.length - 1){
                musicIndex = 0
        }
        loadsong(listMusic[musicIndex])
        play()
}

playBtn.addEventListener('click', () =>{
        let music_check = musicPlayer.classList.contains('play')
        if(music_check){
            pause()
        }else{
            play()
        }
})

window.addEventListener('keydown', (e) =>{
        if(e.code === 'Space'){
                let musics_check = musicPlayer.classList.contains('play')
                if(musics_check){
                    pause()
                }else{
                    play()
                }   
        }
})

backwardBtn.addEventListener('click', ()=>{
        backwardMusic()
})

window.addEventListener('keydown', (e) =>{
        if(e.code === 'ArrowLeft'){
                backwardMusic()
        }
})

forwardBtn.addEventListener('click', ()=>{
        forwardMusic()
})

window.addEventListener('keydown', (e) =>{
        if(e.code === 'ArrowRight'){
                forwardMusic()
        }
})

progressContainer.addEventListener('click', setProgress)
music.addEventListener('timeupdate', updateProgress)
music.addEventListener('ended', ()=>{
        forwardMusic()
        loadDuration()
})

function volumes(){
        showVolume.innerHTML = volume.value
        music.volume = volume.value / 100
}

listMusic.forEach(item => {
        let link = document.createElement('a')
        let list = document.createElement('li')
        link.setAttribute('src',item)
        link.innerHTML = item
        musicList.append(list)
        list.append(link)
});

let menuTrue = true

menu.addEventListener('click',()=>{
        if(menuTrue === true){
                musicMenu.style.transform = 'translateX(0)'
                musicMenu.style.transition = 'all .8s'
                menu.style.border = '2px solid black'
                menuTrue = false
        }else{
                musicMenu.style.transform = 'translateX(100%)'
                musicMenu.style.transition = 'all .8s'
                menu.style.border = '0'
                menuTrue = true   
        }
})

let musicLi = document.querySelectorAll('.music_list li a')
musicLi.forEach(item =>{
        item.addEventListener('click',()=>{
                let linkMusic = item.getAttribute('src')
                music.setAttribute('src', `./musics/${linkMusic}.mp3`)
                let photo = document.createElement('img')
                photo.setAttribute('src', `./images/${linkMusic}.jpg`)
                musicImg.append(photo)
                photo.style.zIndex = '500'
                let anim_check = musicPlayer.classList.contains('play')
                photo.classList.add('img_anim')
                title.innerHTML = linkMusic
                play()
        })
})

let repeats = true

repeat.addEventListener('click', () =>{
        if(repeats === true){
                music.repaet
        }
})