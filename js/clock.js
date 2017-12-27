
function clock(){
	this.amp="AM";
	this.date=new Date();
	this.hour=date.getHours();
	if(this.hour>11 && this.hour<24)
		this.amp="PM"
	this.minute=date.getMinutes();
	this.second=date.getSeconds();
	if(this.hour%12==0 )
	{
		hour=12;
	}
	else{
		this.hour=hour%12;
	}
	document.getElementById("hour").innerHTML=hour;
	document.getElementById("minute").innerHTML=minute;
	document.getElementById("second").innerHTML=second;
	document.getElementById("amp").innerHTML=amp;

	
	
}
setInterval(clock,1000);
