function getDistance(distanceTraveled, traveledPercent) {
	return 'distance between village and capital: ' + String(distanceTraveled * (100 / traveledPercent)) + 'm';
}

module.exports = getDistance;