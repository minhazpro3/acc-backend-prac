
async function getData (){
    try {
        
      const red = "red"
      if(red==="red"){
        console.log("successfully")
      }

      const error = new Error("Email already exist")
      throw error

    } catch (error) {
        errorHandler(error)
        
    }
}


function errorHandler (error){
    const {name, prototype, message,number,stack,description}=error
    // logger.error({
    //     name,
    //     message,
    //     stack
    // })
    console.log(name, message)
}

console.log("done")
getData()


