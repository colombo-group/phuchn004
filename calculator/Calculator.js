so ="";
so1 = 0;
dau = "";
so2 = 0;
hienthi="";
ok ="";
ma = 0;
function setM(m){
	switch(m){
		case "mc":
			document.getElementById('m').innerHTML = "";
			ma = 0;
			break;
		case "mr":
			document.getElementById('m').innerHTML = "M";
			document.getElementById('result').value = (ma);
			hienthi=ma;
			break;
		case "m+":
			document.getElementById('m').innerHTML = "M";
			a = hienthi;
			a = parseFloat(a);
			ma += a;
			break;	
		case "m-":
			document.getElementById('m').innerHTML = "M";
			a = hienthi;
			a = parseFloat(a);
			ma -= a;
			break;	
	}
}
function check(x){
	if (x=="1" || x=="2" || x=="3" || x=="4" || x=="5" || x=="6" || x=="7" || x=="8" || x=="9" || x=="0" || x==".")
		return true;
	return false;
}
function input(x) {
	// body...
	if (ok=="continue?"){
		ok = true;
		clearall();	
	}
	if (x=="." && hienthi=="")
		hienthi = "0";
	if (so.length>0 && check(so[so.length-1])==false ){
		dau = so[so.length-1];
		document.getElementById("result").value = "0";
		if (x==".")
			hienthi = "0.";
		else	
			hienthi = String(x);
	}
	else
		hienthi = hienthi + String(x);
	so += String(x);
	document.getElementById("result").value = hienthi;
}
function clearall(){
	so = "";
	hienthi = "";
	so1 = 0;
	so2 = 0;
	document.getElementById("result").value = "0";	
}
function act(x){
	ok = "true";
	a ="";
	if (so.indexOf(":") >-1)
		a = ":";
	else
		if (so.indexOf("X") > -1)
			a = "X";
		else
			if (so.indexOf("+") > -1)
				a = "+";	
	if (a!=""){			
		var st = so.split(a);
		so1 = parseFloat(st[0]);
		if (isNaN(so1)) so1=0;
		switch (a){
			case ":" :
				so1 = so1/1;
				break;
			case "X" :
				so1 = so1*1;
				break;
			case "+" :
				so1 = so1+0;
				break;		
		}
		so = String(so1);
		hienthi = so;
		document.getElementById("result").value = hienthi;
	}
	so += x;	
}

function Tinh(){
	ok = "continue?";
	a ="";
	if (so.indexOf(":") >-1)
		a = ":";
	else
		if (so.indexOf("X") > -1)
			a = "X";
		else
			if (so.indexOf("+") > -1)
				a = "+";
	if (a!=""){				
		var st = so.split(a);
		so1 = parseFloat(st[0]);
		if (isNaN(so1)) so1=0;
		so2 = parseFloat(st[1]);
		if (isNaN(so2)) so2=0;
		switch (a){
			case ":" :
				so1 = so1/so2;
				break;
			case "X" :
				so1 = so1*so2;
				break;
			case "+" :
				so1 = so1+so2;
				break;		
		}
		so = String(so1);
		hienthi = so;
		document.getElementById("result").value = so;
	
	}
}