class Menu{

    #priceOfSalt;
    #priceOfPepper;
    
        constructor(priceOfSalt,priceOfPepper){
            this.#priceOfSalt = priceOfSalt;
            this.#priceOfPepper = priceOfPepper;
            
        }
    
        total(numberOfSalt,numberOfPepper){
            var totalPrice = '';
            var totalForSalt =this.#priceOfSalt*numberOfSalt;
            var totalForPepper = this.#priceOfPepper*numberOfPepper;
    
            totalPrice = totalForSalt + totalForPepper;
            return totalPrice;
        }
    
        get priceOfSalt(){
            return this.#priceOfSalt;
        }
    
        set priceOfSalt(priceOfSalt){
            this.#priceOfSalt;
        }
    
        get priceOfPepper(){
    return this.#priceOfPepper;
        }
    
        set priceOfPepper(priceOfPepper){
    this.#priceOfPepper = priceOfPepper;
        }
    }
    
    let customer1 = new Menu(4,2);
    let customer2 = new Menu(6,1);
    console.log(customer1.total(17,33));
    console.log(customer2.total(10,2));