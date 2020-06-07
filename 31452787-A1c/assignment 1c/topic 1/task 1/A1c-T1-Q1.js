let zooDataObject = {
    name: "Melbourne Zoo",
    address: "Elliott Ave, Parkville VIC 3052",
    phone: "1300966784",
    animals: [
        "Lemur",
        "Giraffe",
        "Kangaroo",
        "Seal",
        "Meerkat",
        "Tiger",
        "Gorilla"
    ]
};

let zooData = JSON.stringify(zooDataObject);
let key = "zoo-data";
localStorage.setItem(key, zooData);

let jsonString = localStorage.getItem(key);
let zoo = JSON.parse(jsonString);

console.log("Zoo Details" + "<br>" + "Name : " + zoo.name + "Address : " + zoo.address + "<br>" + "Phone : " + zoo.phone + "<br>" + "Animals : ");

for (let i = 0; i < zoo.animals.length; i++){
	console.log(zoo.animals[i]);
}
