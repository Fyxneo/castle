var tableEtablissement = document.getElementById("tableEtablissement");


const button = document.querySelector('#compute');

 button.addEventListener('click', function onClick () {
	 
	if(tableEtablissement.rows.length == 1)
		{
			for (var i=0;i<relais_michelin.length;i++)
			{
				var row = tableEtablissement.insertRow(i+1);
				var hotel_Name = row.insertCell(0);
				var postal_Code = row.insertCell(1);
				var chef = row.insertCell(2);
				var price = row.insertCell(3);
				hotel_Name.textContent = relais_michelin[i].hotelName;
				postal_Code.innerHTML = relais_michelin[i].postalCode;
				chef.innerHTML = relais_michelin[i].chef;
				price.textContent = relais_michelin[i].price;

			}
	 }
    return;
 });



