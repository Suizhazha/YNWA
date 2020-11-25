let digitWidth = t => {
  let digitWidth = 0
  do {
    let digit = t % 10;
    t = (t - digit) / 10
    digitWidth++
  } while (t > 0)
  return digitWidth
}

const power = (a,n)=>{
  let result = 1
  for(let i=0 ;i<n;i++){
    result*=a
  }
  return result
}
power(2,3)



