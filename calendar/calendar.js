	function dau_thang(ngay,thu){
		var t = thu;
		for (i=ngay; i>1; i--)
			if (t==0)
				t=6;
			else
				t--;
		return t;			
	}
	function cuoi_thang(date,day,number_day){
		for (var i = date+1; i <= number_day; i++) {
			if (day==6)
				day=0;
			else
				day++;
		}
		return day;
	}
	var d = new Date();
	day = d.getDay();	//thu5 = 4
	date = d.getDate(); //ngay=1
	thu = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
	head = "<br><span style = 'color:white; font-size:100px;'>" + date + "</span>" + "<br>";
	head += "<span style='color:white; font-size24px; font-weight:bold'>" + thu[day] + "</span>";
	document.getElementById('head').innerHTML = head;


	days = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	m = d.getMonth();
	month = days[m];
	year = d.getUTCFullYear();
	mung1 = dau_thang(date,day);
	number = [31,28,31,30,31,30,31,31,30,31,30,31];
	if (year%4==0)
		number[1]=29;
	number_day = number[m];
	cuoi = cuoi_thang(date,day,number_day);
	function display(){
		r = "<table style='text-align:center'>";
		r += "<tr style='line-height:35px'>"
	 	  +	"<td colspan='7' style='text-align:center; color:#4c5246; font-size:18px; margin-bottom:20px'>"
	 	  +		month + " " + year
	 	  +	"</td>"
	 	  +  "</tr>"
		r += "<tr style='line-height:35px'>"
		  +		"<td style='width:30px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> SUN </td>"
	 	  +		"<td style='width:px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> MON </td>"
	 	  +		"<td style='width:30px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> TUE </td>"
	 	  +		"<td style='width:30px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> WED </td>"
	 	  +		"<td style='width:30px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> THU </td>"
		  +		"<td style='width:30px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> FRI </td>"
		  +		"<td style='width:30px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> SAT </td>"
		  +  "</tr>"
		ngay = 1;
		r += "<tr style='line-height:25px'>"
		for (i=0;i<=6;i++)
			if (i<mung1) {
				r  +=  "<td> </td>" }
			else
				if (date==ngay && m==d.getMonth() && year==d.getUTCFullYear()) {
					r  += "<td style='color:red'>" + ngay++; + "</td>" }
				else	
					r  += "<td>" + ngay++; + "</td>"
		moc = ngay; //=4
		r += "</tr>";	
		for (i=ngay; i<=number_day; i++){
			if ((i-moc)%7==0)
				r += "<tr>";
			if (date==i && m==d.getMonth() && year==d.getUTCFullYear()) {
					r  += "<td style='color:red'>" + i + "</td>" }
			else	
					r += 	"<td style='width:30px;'>" + i + "</td>"
				if ((i-moc)%7==6)
					r += "</tr>";
	}
	r += "</table>";
	document.getElementById("content").innerHTML = r;
	}
	r = "<table style='text-align:center'>";
	r += "<tr style='line-height:35px'>"
	  +	"<td colspan='7' style='text-align:center; color:#4c5246; font-size:18px; margin-bottom:20px'>"
	  +		month + " " + year
	  +	"</td>"
	  +  "</tr>"
	r += "<tr style='line-height:35px'>"
	  +		"<td style='width:30px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> SUN </td>"
	  +		"<td style='width:px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> MON </td>"
	  +		"<td style='width:30px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> TUE </td>"
	  +		"<td style='width:30px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> WED </td>"
	  +		"<td style='width:30px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> THU </td>"
	  +		"<td style='width:30px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> FRI </td>"
	  +		"<td style='width:30px; font-size:11px; font-weight:bold;color:#96bd7b; text-align:center'> SAT </td>"
	  +  "</tr>"
	ngay = 1;
	r += "<tr style='line-height:25px'>"
	for (i=0;i<=6;i++)
		if (i<mung1) {
			r  +=  "<td> </td>" }
		else
			if (date==ngay && m==d.getMonth() && year==d.getUTCFullYear()) {
				r  += "<td style='color:red'>" + ngay++; + "</td>" }
			else	
				r  += "<td>" + ngay++; + "</td>"
	moc = ngay; //=4
	r += "</tr>";	
	for (i=ngay; i<=number_day; i++){
		if ((i-moc)%7==0)
			r += "<tr>";
		if (date==i && m==d.getMonth() && year==d.getUTCFullYear()) {
				r  += "<td style='color:red'>" + i + "</td>" }
		else	
				r += 	"<td style='width:30px;'>" + i + "</td>"
		if ((i-moc)%7==6)
			r += "</tr>";
	}
	r += "</table>";
	document.getElementById("content").innerHTML = r;
function next1(){
	if (m==11){
		m=0;
		year = year + 1;
	}
	else
		m++;
	month = days[m];
	if (year%4==0)
		number[1] = 29;
	else number[1]=28;
	number_day = number[m];
	if (cuoi==6)
		mung1 = 0;
	else
		mung1 = cuoi+1;
	display();
	cuoi = cuoi_thang(1,mung1,number_day);
}

function back1(){
	if (m==0){
		m=11;
		year = year - 1;
	}
	else
		m--;
	month = days[m];
	if (year%4==0)
		number[1] = 29;
	else number[1]=28;
	number_day = number[m];
	if (mung1==0)
		cuoi=6;
	else
		cuoi = mung1-1;
	mung1 = dau_thang(number_day,cuoi);
	display();
}