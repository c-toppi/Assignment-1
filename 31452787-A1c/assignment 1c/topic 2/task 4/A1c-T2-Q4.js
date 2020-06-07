class Order {
	constructor(type = "", size = ["Small", "Medium", "Large"], sugars = [0,1,2,3,4,5], ownCup = [true, false], cost = ""){
		this._type = type;
		this._size = size;
		this._sugars = sugars;
		this._ownCup = ownCup;
		this._cost = cost;
	}

	get type(){
		return this._type;
	}
	get size(){
		return this._size;
	}
	get sugars(){
		return this._sugars;
	}
	get ownCup(){
		return this._ownCup;
	}
	get cost(){
		return this._cost;
	}

	set type (newType){
		this._type = newType;
	}
	set size (newSize){
		this._type = newSize;
	}
	set sugars (newSugars){
		this._sugars = newSugars;
	}
	set ownCup (newOwnCup){
		this._ownCup = newOwnCup;
	}
	set cost(newCost){
		this._cost = newCost;
	}

	toString(){
		return (`Coffee Type: ${this._type} | $${this._cost}
		<br> Sugars: ${this._sugars} | Size: ${this._size} | Own Cup: ${this._ownCup}`
				);
	}
}

class CoffeeOrders {
	constructor(cafeName = "", cafeAddress = "", date = ""){
		this._cafeName = cafeName;
		this._cafeAddress = cafeAddress;
		this._date = date;
		this._coffeeOrders = [];
		for (let i = 0; i<=1; i++){
			let order = new Order(i);
			this._coffeeOrders.push(order);
		}
		this._totalSales = this._coffeeOrders.length*4.5;
	}

	get cafeName(){
		return this._cafeName;
	}
	get cafeAddress(){
		return this._cafeAddress;
	}
	get date(){
		return this._date;
	}

	set cafeName(newName){
		this._cafeName = newName;
	}
	set cafeAddress(newAddress){
		this._cafeAddress = newAddress;
	}
	set date(newDate){
		this._date = newDate;
	}

	addOrder (newOrder){
		this._coffeeOrders.push(newOrder);
	}


	toString(){
		return (
			`Cafe Name: ${this._cafeName} | Date: ${this._date}
			<br> Coffee Orders: ${this._coffeeOrders.length} | Total Sales: $${this._totalSales}
			<br> Individual Orders: `
		);
	}
}

let cafe = new CoffeeOrders("Organic Coffee Cafe", "2890 Clayton Rd, Clayton VIC 3168", "2/02/2020");
console.log(cafe);

let coffee1 = new Order("Mocha", "Medium", 2, true, 4.50);
console.log(coffee1);

let coffee2 = new Order("Espresso", "Large", 4, false, 4.50);
console.log(coffee2);
