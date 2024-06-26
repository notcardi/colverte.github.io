get = {
  prices:function(p, size, pnum, dis){
    price = p + (size * 2) + (pnum * 1.50)
    return price + price * dis
  },
}
