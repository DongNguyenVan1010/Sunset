function changeSlider() {

    var slider = document.querySelector('.slider__item-wrap')
    var flkty = new Flickity(
        slider,
        {
            // options
            cellAlign: 'left',
            contain: true,
            draggable: '>1',
            wrapAround: true,
            prevNextButtons: false,
            autoPlay: true,
            // on: {
            //     ready: function () {
            //         console.log('Flickity is ready');
            //         handleDotSLider()
            //     },
            //     change: function (index) {
            //         console.log('Slide changed to' + index);
            //         handleNumPageSlider(index)
            //     }
            // }
        }
    );
}

// function scrollMenu() {

//     let menu = document.querySelectorAll('.header .header__menu li a'),
//         heightHeader = document.querySelector('.header').offsetHeight
//     console.log(menu);
//     // function removeActive() {
//     //     menu.forEach(function (menuItem) {
//     //         menuItem.classList.remove('active')
//     //     })
//     // }

//     menu.forEach(function (item, index) {
//         let href = item.getAttribute('href')
//         let className = href.replace('#', '')

//         let section = document.querySelector('.' + className)
//         let posSection = section.offsetTop
//         // let className = item.getAttribute('href').replace('#', '')
//         // console.log(className);
//         // let posSection = document.querySelector('.' + className).offsetTop


//         item.addEventListener('click', function () {

//         })
//     })

// }
// scrollMenu()



function selectLang() {
    let lang = document.querySelector('.header__right .header__right-lang'),
        langCur = document.querySelector('.header__right .header__right-lang .lang-cur span'),
        langOpt = document.querySelector('.header__right .header__right-lang .lang-opt'),
        langItem = document.querySelectorAll('.header__right .header__right-lang .lang-opt  a')

    lang.addEventListener('click', function (e) {
        e.stopPropagation() // stop executing 2 events in the same time

        lang.classList.toggle('active')
    })

    langItem.forEach(item => {
        item.addEventListener('click', function () {
            let langText = langCur.innerHTML
            langCur.innerHTML = this.textContent  //lang cur = lang item of option
            this.innerHTML = langText

        })
    })

    document.addEventListener('click', function () {
        lang.classList.remove('active')
    })
}

selectLang()


// function moveMenu() {
//     let menu = document.querySelectorAll('.header__menu li a')
//     console.log(menu);
//     menu.forEach(item => {
//         let className = item.getAttribute('href').replace('#', './')
//         let page = document.querySelector(className + '.html')
//         console.log(page);

//         item.addEventListener('click', function (e) {

//         })
//     })
// }
// moveMenu()

function activeMenu() {
    let menu = document.querySelectorAll('.header__menu li a')

    menu.forEach(item => {

        item.addEventListener('click', function (e) {
            menu.forEach(item => {
                item.classList.remove('active')
            })
            item.classList.add('active')
        })
    })
}

activeMenu()


function menuButton() {
    const btnMenu = document.querySelector('.btnmenu'),
        nav = document.querySelector('.nav')
    btnMenu.addEventListener('click', function () {
        this.classList.toggle('active')
        nav.classList.toggle('active')
    })

    function hideNav() {
        btnMenu.classList.remove('active')
        nav.classList.remove('active')
    }

    window.addEventListener('resize', function () {
        let winWidth = window.innerWidth
        if (winWidth = 992) {
            hideNav()
        }
    })

}

menuButton()

function progressBar() {


    let progress = document.querySelector('.progressbar')

    window.addEventListener('scroll', () => {
        let y = window.scrollY

        // let height = document.offsetHeight - window.innerHeight
        // innerHeight dont get full height like doc.offsetHeight bc of the scroll attr 
        // (the height screen at the bottom when we scroll till end)

        let percent = (y / (document.body.offsetHeight - window.innerHeight)) * 100
        progress.style.width = `${percent}%`
    })
}

progressBar()




function backToTop() {
    let back = document.querySelector('.backbtn')
    let hero = document.querySelector('.--hero')
    let slider = document.querySelector('.slider')
    document.addEventListener('scroll', function (e) {
        let y = window.pageYOffset
        if (y > hero.offsetTop || y > slider.offsetTop) {
            back.classList.add('active')
        }
        else {
            back.classList.remove('active')
        }
    })
    back.addEventListener('click', function () {
        window.scrollTo({
            'top': 0

        })
    })
}
backToTop()


function handleTabBot() {

    let tabBot = document.querySelectorAll('.gallery .tabsbot .gallery__tabs-item')
    let gallery = document.querySelector('.librarypage .gallery .gallery__wrap')
    tabBot.forEach(function (tab) {
        tab.addEventListener('click', function () {
            window.scrollTo({
                'top': 266

            })
        })
    })
}

handleTabBot()

function handleTabNews() {

    let tabs = document.querySelectorAll('.gallery .gallery__tabs .gallery__tabs-item'),

        listGal = document.querySelectorAll('.gallery .gallery__list')
    tabs.forEach(function (tabs__item) {
        tabs__item.addEventListener('click', function () {

            tabs.forEach(function (tabs__item) {
                tabs__item.classList.remove('active')
            })
            tabs__item.classList.add('active')

            // Hide All List
            listGal.forEach(function (list__item) {
                list__item.classList.remove('active')
            })

            // let id = this.dataset.tabs__item
            let id = tabs__item.getAttribute('data-tab')

            document.querySelector('.gallery__list-' + id).classList.add('active')
        })
    })


}
handleTabNews()
function handleVideo() {
    let video = document.querySelector('.menu__video .icon'),
        modalVideo = document.querySelector('.popupvid'),
        iframeModalVideo = document.querySelector('.popupvid .popupvid__inner .popupvid__inner-iframe iframe'),
        btnClose = document.querySelector('.popupvid .popupvid__inner .popupvid__inner-close')
    video.addEventListener('click', function (e) {
        modalVideo.classList.add('active')

        // get attr
        let dataID = video.getAttribute('data-video-src')

        // set attr
        iframeModalVideo.setAttribute('src', `https://www.youtube.com/embed/${dataID}?autoplay=1`)
        // use the char `` in keyboard 1,  not ''
    })


    function closeVideo() {
        modalVideo.classList.remove('active')
        iframeModalVideo.setAttribute('src', '')
        // disconnect to video link


    }
    btnClose.addEventListener('click', function (e) {
        closeVideo()
    })
    modalVideo.addEventListener('click', function (e) {
        closeVideo()
    })
}

handleVideo()

window.addEventListener('load', function () {
    changeSlider()
})