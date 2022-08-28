const myPromise = new Promise((resolved, rejected)=>{

        setTimeout(()=>{
            resolved("successfully got code")
        },2000)
    
})

async function getData(){
    const res = await myPromise
    console.log(res)
}

getData()


// by default node e fetch use kora jaina
// fetch("")
// .then(res=>res.json())
// .then(data=>console.log(data))

// async function getUser (){
//     const res = await fetch("")
//     const user = await res.json()
//     const res2 = await fetch(`https://www.example.com/${user.id}`)
//     const product = res2.json()
//     console.log(product)
// }