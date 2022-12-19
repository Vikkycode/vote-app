import img1 from './Images/img-1.jpg'
import img2 from './Images/img-2.png'
import img3 from './Images/img-3.jpg'


function generateVoteCount(){
        return Math.floor((Math.random() * 50) + 15);
}

export const productComponents = [
    {
        id:1,
        title:'Fort Knight',
        description:'Authentic renaaisssanxce, delivered in just two weeks',
        url:'#',
        votes:generateVoteCount(),
        submittedAvatarUrl:img1,
        productImageUrl:img1,
        
    },
    {
        id:2,
        title:'God of war',
        description:'He is amazing',
        url:'#',
        votes:generateVoteCount(),
        submittedAvatarUrl:img2,
        productImageUrl:img2,
    },
    {
        id:3,
        title:'He loves us',
        description:'Because of the love of God, he saved us',
        url:'#',
        votes:generateVoteCount(),
        submittedAvatarUrl:img3,
        productImageUrl:img3,

    }
]