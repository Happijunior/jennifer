
const main = document.querySelector('main')
const bars = document.getElementById('bars')
const text = document.getElementById('text')
const home = document.getElementById('home')
const user = document.getElementById('user')
const footer = document.querySelector('footer')
const contain = document.getElementById('contain')
const details = document.querySelectorAll('.details')
const big_image = document.querySelector('.big_image')
const mode_nuit = document.getElementById('mode_nuit')
const categories = document.getElementById('categories')
const menu_flottant = document.getElementById('menu_flottant')



const user_profile = document.getElementById('user_profile')
const close_profile = document.getElementById('close_profile')
const pubs = document.querySelectorAll('.pubs')
const pub = document.querySelector('.pub')
const description_pub = document.querySelector('.description_pub')

const side = document.querySelector('.side')
const items_accueil = document.querySelector('#items_accueil')
const title_populaire = document.querySelector('.title_populaire')

const option_sport = document.getElementById('option_sport')
const option_robes = document.getElementById('option_robes')
const option_mixtes = document.getElementById('option_mixtes')
const option_costumes = document.getElementById('option_costumes')
const option_accessoires = document.getElementById('option_accessoires')
const option_sous_vetement = document.getElementById('option_sous_vetement')
const option_tendances_jeunes = document.getElementById('option_tendances_jeunes')
const option_chaussures_hommes = document.getElementById('option_chaussures_hommes')
const option_chaussures_femmes = document.getElementById('option_chaussures_femmes')

const sport = document.getElementById('sport')
const robes = document.getElementById('robes')
const mixtes = document.getElementById('mixtes')
const costumes = document.getElementById('costumes')
const accessoires = document.getElementById('accessoires')
const sous_vetement = document.getElementById('sous_vetement')
const tendances_jeunes = document.getElementById('tendances_jeunes')
const chaussures_hommes = document.getElementById('chaussures_hommes')
const chaussures_femmes = document.getElementById('chaussures_femmes')


// mode nuit 




// grande image dans la page d'accueil

details.forEach(details =>{
    details.addEventListener('click', function(e){
        image = e.target.parentNode.previousElementSibling
        style = window.getComputedStyle(image)
        backgroundImage = style.getPropertyValue('background-image')
        big_image.style.backgroundImage = backgroundImage
    })
})

// catégories

menu_flottant.style.display = "none"
bars.addEventListener('click', function(){
    menu_flottant.style.display = "grid"
})
window.addEventListener('scroll', function(){
    menu_flottant.style.display = 'none'
})

// fonction de disparition 

function disparition(){
    const children = main.children
    for(i = 0; i<children.length; i++){
        children[i].style.display = "none"
    }
    footer.style.display = "none"
    text.style.display = 'none'
    menu_flottant.style.display = 'none'
    pub.style.display = 'none'

}

// gestion des apparitions 

option_costumes.addEventListener('click', function(){
    disparition()
    animation.style.display = 'block'
    setTimeout(()=> {
        costumes.style.display = 'grid'
        animation.style.display = 'none'
        footer.style.display = "block"

    },1000)
})

option_chaussures_hommes.addEventListener('click', function(){
    disparition()
    animation.style.display = 'block'
    setTimeout(()=> {
        chaussures_hommes.style.display = 'grid'
        animation.style.display = 'none'
        footer.style.display = "block"
    },1000)
})

option_robes.addEventListener('click', function(){
    disparition()
    animation.style.display = 'block'
    setTimeout(()=> {
        robes.style.display = 'grid'
        animation.style.display = 'none'
        footer.style.display = "block"
  },1000)
})

option_chaussures_femmes.addEventListener('click', function(){
    disparition()
    animation.style.display = 'block'
    setTimeout(()=> {
        chaussures_femmes.style.display = 'grid'
        animation.style.display = 'none'
        footer.style.display = "block"
  },1000)
})

option_mixtes.addEventListener('click', function(){
    disparition()
    animation.style.display = 'block'
    setTimeout(()=> {
        mixtes.style.display = 'grid'
        animation.style.display = 'none'
        footer.style.display = "block"
  },1000)
})

option_tendances_jeunes.addEventListener('click', function(){
    disparition()
    animation.style.display = 'block'
    setTimeout(()=> {
        tendances_jeunes.style.display = 'grid'
        animation.style.display = 'none'
        footer.style.display = "block"
  },1000)
})

option_sport.addEventListener('click', function(){
    disparition()
    animation.style.display = 'block'
    setTimeout(()=> {
        sport.style.display = 'grid'
        animation.style.display = 'none'
        footer.style.display = "block"
  },1000)
})

option_accessoires.addEventListener('click', function(){
    disparition()
    animation.style.display = 'block'
    setTimeout(()=> {
        accessoires.style.display = 'grid'
        animation.style.display = 'none'
        footer.style.display = "block"
    },1000)
})

option_sous_vetement.addEventListener('click', function(){
    disparition()
    animation.style.display = 'block'
    setTimeout(()=> {
        sous_vetement.style.display = 'grid'
        animation.style.display = 'none'
        footer.style.display = "block"
    },1000)
})

home.addEventListener('click', function(){
    disparition()
    animation.style.display = 'block'
    setTimeout(()=> {
        text.style.display = 'block' 
        side.style.display = 'block'
        title_populaire.style.display = 'block'
        items_accueil.style.display = 'grid'
        footer.style.display = "block" 
        pub.style.display = 'flex'  
        animation.style.display = 'none'
    },1000)
})

user.addEventListener('click', function () {
    user_profile.style = "transform: translateY(0)"
})
close_profile.addEventListener('click',function(){
    user_profile.style = "transform: translateY(100%)"
})

// publicité

pubs.forEach(pubs =>{
    pubs.addEventListener('click',function(e){
        const pub_children = pub.children
        for(i=0; i<pub_children.length; i++){
            pub_children[i].style = "width: 5vw; border-radius: 1rem; transition: 0.5s"
            pub_children[i].firstElementChild.style.display = 'none'
            pub_children[i].lastElementChild.style.display = 'none'
        }
        e.target.style = "width: 30vw; border-radius: 2rem; transition: 0.5s"
        setTimeout(()=>{
            e.target.firstElementChild.style.display = 'block'
            e.target.lastElementChild.style.display = 'flex'
        }, 400)
    })
})