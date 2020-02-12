class CityMap {
    constructor(str) {
        this.str = str;
    }

    get str() {
        return this._str;
    }

    set str(str) {
        this._str = str;
    }

}

let cityOne = new CityMap("\"Nashville, TN\", 36.17, -86.78;\"New York, NY\", 40.71, -74.00;\"Atlanta, GA\", 33.75, -84.39;\"Denver, CO\", 39.74, -104.98;\"Seattle, WA\", 47.61, -122.33;\"Los Angeles, CA\", 34.05, -118.24;\"Memphis, TN\", 35.15, -90.05;");
let arrLat = [];
let arrLong = [];
let str = '';

function strParser(value) {
    let str1 = value._str;
    let s = str1.split(";", 7);

    return s;
}

str = strParser(cityOne);

function findMost(value) {


    for (let i in str) {
        arrLat.push(str[i].split(",")[2]);
        arrLong.push(str[i].split(",")[3]);
    }
    let maxNumLat = Math.max(...arrLat);
    let minNumLat = Math.min(...arrLat);
    let maxNumLong = Math.max(...arrLong);
    let minNumLong = Math.min(...arrLong);

    for (let index in arrLat) {
        if (arrLat[index] == maxNumLat) {
            let v = index;
            this.cityNorth = str[v].split(',')[0].replace("\"", "");
        }
        if (arrLat[index] == minNumLat) {
            let v1 = index;

            this.citySouth = str[v1].split(',')[0].replace("\"", "");
        }
    }

    for (let index1 in arrLong) {
        if (arrLong[index1] == maxNumLong) {
            let v2 = index1;
            this.cityEast = str[v2].split(',')[0].replace("\"", "");
        }
        if (arrLong[index1] == minNumLong) {
            let v3 = index1;
            this.cityWest = str[v3].split(',')[0].replace("\"", "");
        }
    }

    switch (value) {
        case "N":
            return this.cityNorth;
            break;
        case "S":
            return this.citySouth;
            break;
        case "E":
            return this.cityEast;
            break;
        case "W":
            return this.cityWest;
            break;
        default:
            console.log("choose between N, S, E, W");

    }


}

function findNearest(val1, val2) {
    let arr = [];
    let arr1 = [];
    for (let index in arrLat) {
        arr.push(val1 > arrLat[index] ? val1 - arrLat[index] : arrLat[index] - val1);

    }

    for (let index in arrLong) {
        arrLong[index] = Number(arrLong[index]);
        arr1.push(val2 > arrLong[index] ? val2 - arrLong[index] : arrLong[index] - val2);

    }

    let min = Math.min(...arr);
    let min1 = Math.min(...arr1);


    for (let i in arr) {
        if (min == arr[i]) {
            this.v = i;
            this.city1 = str[this.v].split(',')[0].replace("\"", "");
        }
    }

    let b = false;
    for (let i in arr1) {
        if (arr1[this.v] == min1) {
            b = true;
            this.city2 = str[this.v].split(',')[0].replace("\"", "");

        }
        if (arr1[i] == min1) {
            this.j = i;
            this.city2 = str[this.j].split(',')[0].replace("\"", "");
        }

    }
    if (arr[this.v] + arr1[this.v] <= arr[this.j] + arr1[this.j]) {
        this.city = str[this.v].split(',')[0].replace("\"", "");
    } else {
        this.city = str[this.j].split(',')[0].replace("\"", "");
    }
    /*console.log("++++++Compare++++++");
    console.log(this.city1 + "|" + this.city2);
    console.log(arr[this.v] + "|" + arr1[this.v] + "|" + arr[this.j] + "|" + arr1[this.j]);*/
    console.log(this.city);


}

function statesToString() {
    let arr = [];
    for (let i in str) {
        arr.push(str[i].split(",")[1].replace("\"", ""));
    }
    arr = Array.from(new Set(arr)).toString().replace(/,/g, "").trim();

    console.log(arr);


}

function findState(str1) {
    let arr = [];
    let ind = [];
    let cityName = [];
    for (let i in str) {
        arr.push(str[i].split(",")[1].replace("\"", "").trim());
    }

    arr.filter((my, index) => {
        if (my == str1) {
            ind.push(index)
        }
    })
    for (let j in ind) {
        cityName.push(str[ind[j]].split(",")[0].replace("\"", ""));
    }
    //console.log(ind);
    console.log(cityName);
}

console.log("Task_1");
let m = findMost('E');
console.log(m);
console.log("____________________________________________");
console.log("Task_2");
findNearest(100, -86);
console.log("____________________________________________");
console.log("Task_3");
statesToString();
console.log("____________________________________________");
console.log("Advanced_1");
findState("TN");



