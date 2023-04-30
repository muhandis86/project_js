const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5
		},
		{
			width: 15,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 51000
};

function isBudgetEnough(data) {
	let ShopArea = 0,
		MallArea = 0;
	data.shops.forEach(function(item) {
		ShopArea = item.length * item.width;
		MallArea = MallArea + ShopArea;
	});
	const MallPayment = MallArea * data.height * data.moneyPer1m3;

	if (MallPayment > data.budget) {
		return 'Бюджета недостаточно';
	} else  {
		return  'Бюджета достаточно';
	}
}

console.log(isBudgetEnough(shoppingMallData));

