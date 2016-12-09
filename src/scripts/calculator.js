var calculateButton = $('#calculate-button');

calculateButton.click(function(){

	var weightInput = $('#weight-input').val();
	var heightInput = $('#height-input').val();
	var BMI = (weightInput/(heightInput*heightInput)*10000);
	var result = $('#result');
	var resultText = '<h4>Ditt BMI är '+Math.round(BMI)+'</h4>';

	result.empty();

	result.append(resultText);

});