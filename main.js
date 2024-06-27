get = {
  prices:function(p, size, pnum, dis){
    price = p + (size * 2) + (pnum * 1.50)
    return price + price * dis
  },
  waitime:function(){
    const day =  1000 * 60 * 60 * 24;
    let daysleft = Math.round((new Date.getTime() / (day * 7)) - (new Date.getTime() % (day * 7)));
  }
}

console.log(waitime());
