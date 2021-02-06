// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];


function calculateAmountToSell(inventoryArray) {
    let stockToSell = 0;
    for (const inventoryKey in inventory) {
        stockToSell += inventory[inventoryKey].originalStock - inventory[inventoryKey].sold;
    }
    return stockToSell;
}

function calculateRevenueTarget(inventoryArray) {
    let revenue = 0;
    for (const inventoryKey in inventoryArray) {
        revenue += (inventoryArray[inventoryKey].originalStock - inventoryArray[inventoryKey].sold) * inventoryArray[inventoryKey].price;
    }
    return revenue;
}

function calculateCurrentRevenue(inventoryArray) {
    let currentRevenue = 0;
    for (const inventoryKey in inventoryArray) {
        currentRevenue += inventoryArray[inventoryKey].sold * inventoryArray[inventoryKey].price;
    }
    return currentRevenue;
}

const revenueTarget = document.getElementById("revenueTarget");
revenueTarget.textContent += calculateRevenueTarget(inventory);
revenueTarget.style.color = "blue";

const sellingStock = document.getElementById("stockToSell");
sellingStock.textContent += calculateAmountToSell(inventory);
sellingStock.style.color = "red";

const currentRevenue = document.getElementById("currentRevenue");
currentRevenue.textContent += calculateCurrentRevenue(inventory);
currentRevenue.style.color = "green";

const typeOfTVOne = document.getElementById("typeOfTVOne");
typeOfTVOne.textContent += inventory[1].type;

const typeOfTVTwo = document.getElementById("typeOfTVTwo");
typeOfTVTwo.textContent += inventory[2].type;

function formatTVName (television){
    return television.brand + " " + television.type + " - " +  television.name;
}

function recalculateScreenSizeToCM(sizeInInches) {
    return (sizeInInches/0.39370).toFixed(0);
}

function formatTVSize(televisionSize){
    let screenSizeString = ""
    for (const televisionSizeKey in televisionSize) {
        if (!(televisionSize[televisionSizeKey] === televisionSize[televisionSize.length-1])){
            screenSizeString += televisionSize[televisionSizeKey] + " inches " + "(" + recalculateScreenSizeToCM(televisionSize[televisionSizeKey]) + " cm) | "
        } else {
            screenSizeString += televisionSize[televisionSizeKey] + " inches " + "(" + recalculateScreenSizeToCM(televisionSize[televisionSizeKey]) + " cm)"
        }
    }
    return screenSizeString;
}

console.log(formatTVSize(inventory[2].availableSizes))

function formatPrice (televisionPrice){ //formatteert de prijs volgens de ingebouwde format methode
    return new Intl.NumberFormat('nl-NL', {
       style: 'currency', currency: 'EUR'
   }).format(televisionPrice);
}

console.log(formatPrice(inventory[1].price));
console.log(formatTVName(inventory[1]));

const typeInventoryArray = inventory.map((televisions) => {
    return televisions.type;
});

const soldOutArray = inventory.filter((televisions) => {
    return (televisions.originalStock - televisions.sold) === 0;
});

const hasAmbilightArray = inventory.filter(televisions => {
    return televisions.options.ambiLight;
});

const leastExpensiveToMostExpensiveArray = inventory.sort((televisona, televisionb) => {

        return televisona.price - televisionb.price;
    }
);
