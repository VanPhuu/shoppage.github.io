export function convertPrice(price){
    const priceString =  price.toString();
    const loopNum= Math.ceil(priceString.length / 3)
    const priceArr= priceString.split("").reverse()
    let value = ""
    for(let i=0;i<priceArr.length;i++){
      if((i+1) %3===0){
        value =  value  + priceArr[i]+'.' 
      }
      else{
      value= value + priceArr[i]}
     
    }
    const result = value.split("").reverse()
    if((result.length+1) %3===0){
      result.shift()
    }
  
    return result.join("")
    
  }