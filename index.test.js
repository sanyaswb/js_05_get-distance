const getDistance = require('./index');

test('Функция должна вернуть строку', () => {
	const type = typeof getDistance(100, 50);

	expect(type).toBe('string');
});

test('Тест. distanceTraveled: 100, traveledPercent: 50', () => {
	const res = getDistance(100, 50);

	expect(res).toBe('distance between village and capital: 200m');
});

test('Тест. distanceTraveled: 60, traveledPercent: 20', () => {
	const res = getDistance(60, 20);

	expect(res).toBe('distance between village and capital: 300m');
});

test('Тест. distanceTraveled: 90, traveledPercent: 100', () => {
	const res = getDistance(90, 100);

	expect(res).toBe('distance between village and capital: 90m');
});

test('Тест. distanceTraveled: 0.32, traveledPercent: 0.5', () => {
	const res = getDistance(0.32, 0.5);

	expect(res).toBe('distance between village and capital: 64m');
});