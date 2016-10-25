function bookPrice(basket) {
  var titles = [0,1,2,3,4];
  var books = basket.length;
  if (books === 0) return 0;
  if (books === 1) return 8;
  var sameTitles = basket.reduce(function(a,b){
    return (a!=b)? false : true;
  });
  if(sameTitles) return books*8;
  switch(books) {
    case 2:
      return books*8*0.95;
      break;
    case 3:
      return books*8*0.9;
      break;
    case 4:
      return books*8*0.8;
      break;
    case 5:
      return books*8*0.75;
      break;
  }
}
  // if (titles.indexOf(basket[0]) < 0) return 'Requested book not in the Harry Potter collection';
