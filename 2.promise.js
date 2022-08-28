
// pending

// resolved

// rejected

const myPromise = new Promise((resolved, rejected)=>{
    const user = {
        "id":1
    };
    if(!user){
        rejected("something went wrong")
    }
    else{
        setTimeout(()=>{
            resolved("successfully got code")
        },5000)
    }
})

const userIds = [1,2,3,4,5,6]
let userData = []
for(let i = 0; i < userIds.length; i++){
    const userId = userIds[i]
    userData.push(myPromise)
}
Promise.all(userData).then(res=>{
    console.log(res)
})
// console.log(userData)

myPromise
.then(res=>console.log("resolved", res))
.catch(err=>console.log("reject", err))


console.log("done")