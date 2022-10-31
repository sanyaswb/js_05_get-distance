function getDistance(distanceTraveled, traveledPercent) {
const allDistance = distanceTraveled * (100 / traveledPercent);
String(allDistance);
return 'distance between village and capital: ' + allDistance + 'm';
}

module.exports = getDistance;