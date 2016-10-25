describe('Test Basics', function(){
  it('should be able to buy no books',function(){
    var actual = bookPrice([]);
    expect(actual).toBe(0);
  });
  it('should be able to buy one book',function(){
    var actual = bookPrice([0]);
    expect(actual).toBe(8);
  });
  it('should be able to buy one book',function(){
    var actual = bookPrice([1]);
    expect(actual).toBe(8);
  });
  it('should be able to buy one book',function(){
    var actual = bookPrice([2]);
    expect(actual).toBe(8);
  });
  it('should be able to buy one book',function(){
    var actual = bookPrice([3]);
    expect(actual).toBe(8);
  });
  it('should be able to buy one book',function(){
    var actual = bookPrice([4]);
    expect(actual).toBe(8);
  });
  it('should be able to buy one book',function(){
    var actual = bookPrice([0,0]);
    expect(actual).toBe(16);
  });
  it('should be able to buy one book',function(){
    var actual = bookPrice([1,1,1]);
    expect(actual).toBe(24);
  });
});

describe('Test simple discounts', function() {
  it('should be able to buy two different books',function(){
    var actual = bookPrice([0,1]);
    expect(actual).toBe(8*2*(0.95));
  });
  it('should be able to buy three different books',function(){
    var actual = bookPrice([0,1,2]);
    expect(actual).toBe(8*2*(0.90));
  });
  it('should be able to buy four different books',function(){
    var actual = bookPrice([0,1,2,3]);
    expect(actual).toBe(8*2*(0.80));
  });
  it('should be able to buy five different books',function(){
    var actual = bookPrice([0,1,2,3,4]);
    expect(actual).toBe(8*2*(0.75));
  });
});











  // it('should be able to handle Harry Potter books only',function(){
  //   var actual = bookPrice([5]);
  //   expect(actual).toBe('Requested book not in the Harry Potter collection');
  // });
  // it('should be able to buy 1 book',function(){
  //   var actual = bookPrice([]);
  //   expect(actual).toBe(0);
  // });

});
