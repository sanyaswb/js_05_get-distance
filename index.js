function getDistance(distanceTraveled, traveledPercent) {
	const allDistance = distanceTraveled * (100 / traveledPercent);

	return 'distance between village and capital: ' + String(allDistance) + 'm';
}

module.exports = getDistance;