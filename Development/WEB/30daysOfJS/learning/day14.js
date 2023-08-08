try {
    const fname="Swaroop"
    console.log(fname+lname)
} catch (error) {
    console.error("An error occured" + error.message)
}finally{
    console.log("This willl be executed always")
}

const throwErrorExampleFun = () => {
    let message
    let x = 1
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  throwErrorExampleFun()