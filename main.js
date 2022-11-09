const menu={
    _meal : '',
    _price: 0,
    set meal(mealToCheck){
      if(typeof mealToCheck==='string'){
        return this._meal=mealToCheck;
      }
  
    },
    set price(priceToCheck){
      if(typeof priceToCheck==='number'){
        return this._price=priceToCheck;
      }
  
    },
    get todaysSpecial(){
      if(this._meal!=0&&this._price!=0){
        console.log(`${this._price} ${this._meal}`)
      }else{
        console.log('Meal or price was not set correctly!')
      }
    }
  
  };
  menu.meal='ice';
  menu.price=19;
  menu.todaysSpecial;
  