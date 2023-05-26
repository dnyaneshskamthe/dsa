function minimumPlanesToReachLastAirport(fuelArray,n){
    let maxReach = fuelArray[0];
    let steps = fuelArray[0];
    let jumps = 0;
    // if length if less than 1 , exit
    if(n<1 ){
        return -1;
    }
    
    for(let start = 1; start < n-1 ; start++){
        maxReach = Math.max(maxReach,start+fuelArray[start]);
        steps = steps - 1;
        if(steps === 0){
            jumps += 1;
            steps = maxReach - start ;
        }
    }
    return jumps + 1;
}


// Declre array
const fuelArray = [1, 6, 3, 4, 5, 0, 0, 0, 6];
let n = fuelArray.length; //length of array
const planesNeeded = minimumPlanesToReachLastAirport(fuelArray,n);
console.log("Minimum number of planes needed:", planesNeeded);