

function onSubmitForm(FormName){	

	f = document.forms[FormName];
	switch(FormName){
		case 'ActivityLogConfig':
				x = findControl(f, 'Actions[]');
				for (i = 0; i < x.options.length; i++) {
				    x.options[i].selected = true;
				}				
				y = findControl(f, 'LogActions[]');
				for (i = 0; i < y.options.length; i++) {
				    y.options[i].selected = true;
				}	
			break;
		case 'HomePage':				
				if(!IsInteger(f.LatestNews.value)){
					alert('Input is not a valid integer!');
					f.LatestNews.focus();
					f.LatestNews.select();
					return false;
				}
				if(!IsInteger(f.LatestLinks.value)){
					alert('Input is not a valid integer!');
					f.LatestLinks.focus();
					f.LatestLinks.select();
					return false;
				}
				if(!IsInteger(f.PrevBirthday.value)){
					alert('Input is not a valid integer!');
					f.PrevBirthday.focus();
					f.PrevBirthday.select();
					return false;
				}
				if(!IsInteger(f.UpComingBirthdays.value)){
					alert('Input is not a valid integer!');
					f.UpComingBirthdays.focus();
					f.UpComingBirthdays.select();
					return false;
				}
				
				
				//alert(f.cusBdayCaption.value);
				
				if(f.defNewsCaption.checked==false && trim(f.cusNewsCaption.value) ===""){
					alert('Please input a caption.');
					f.cusNewsCaption.focus();
					f.cusNewsCaption.select();
					return false;
				}				
				
				
				if(f.defBdayCaption.checked==false && trim(f.cusBdayCaption.value) ===""){
					alert('Please input a caption.');
					f.cusBdayCaption.focus();
					f.cusBdayCaption.select();
					return false;
				}
				
				if(f.defLinkCaption.checked==false && trim(f.cusLinkCaption.value) ===""){
					alert('Please input a caption.');
					f.cusLinkCaption.focus();
					f.cusLinkCaption.select();
					return false;
				}
				
				if(f.defNewHireCaption.checked==false && trim(f.cusNewHireCaption.value) ===""){
					alert('Please input a caption.');
					f.cusNewHireCaption.focus();
					f.cusNewHireCaption.select();
					return false;
				}
				
				if(f.defHRUpdateCaption.checked==false && trim(f.curHRUpdateCaption.value) ===""){
					alert('Please input a caption.');
					f.curHRUpdateCaption.focus();
					f.curHRUpdateCaption.select();
					return false;
				}								
					
			break;
		case 'Request':

				if(!IsInteger(f.CutOffThreshold1.value)){
					alert('Input is not a valid integer!');
					f.CutOffThreshold1.focus();
					f.CutOffThreshold1.select();
					return false;
				}
				if(!IsInteger(f.CutOffThreshold2.value)){
					alert('Input is not a valid integer!');
					f.CutOffThreshold2.focus();
					f.CutOffThreshold2.select();
					return false;
				}

				if(f.defNewsCaption.checked==true && trim(f.cusNewsCaption.value) ===""){
					alert('Please input a caption.');
					f.cusNewsCaption.focus();
					f.cusNewsCaption.select();
					return false;
				}					

				//if()

			break;
		case 'EmailConfig':
				if(trim(f.MailNotificationDisplayName.value)=="" || trim(f.MailNotificationDisplayName.value)==null){
					alert('Please enter a valid Display Name!');
					f.MailNotificationDisplayName.focus();
					f.MailNotificationDisplayName.select();
					return false;
				}
				if(trim(f.MailNotificationEmailAccount.value)=="" || trim(f.MailNotificationEmailAccount.value)==null){
					alert('Please enter a valid Email Account!');
					f.MailNotificationEmailAccount.focus();
					f.MailNotificationEmailAccount.select();
					return false;
				}
				if(!onValidEmail(f.MailNotificationEmailAccount.value)){
					alert('Please enter a valid Email Account!');
					f.MailNotificationEmailAccount.focus();
					f.MailNotificationEmailAccount.select();
					return false;
				}
				if(trim(f.POP3Server.value)=="" || trim(f.POP3Server.value)==null){
					alert('Please enter a valid Server Name!');
					f.POP3Server.focus();
					f.POP3Server.select();
					return false;
				}
				if(trim(f.POP3UserName.value)=="" || trim(f.POP3UserName.value)==null){
					alert('Please enter a valid User Name!');
					f.POP3UserName.focus();
					f.POP3UserName.select();
					return false;
				}
			break;

		case "Approval":

			break;

	}
	return true;
}


function trim(s){   
	return s.replace(/^\s+|\s+$/g, '');
} 

function IsInteger(sText){
	var ValidChars = "0123456789"; 			
	var IsNumber=true;
	var Char;	
	IsNumber = !(sText == '' || sText == null);
	for (i = 0; i < sText.length && IsNumber == true; i++) { 
		Char = sText.charAt(i); 
		if (ValidChars.indexOf(Char) == -1) {
			IsNumber = false;
		}	
	}	
	return IsNumber;
}

function onValidEmail(emailStr) {
    var emailPat=/^(.+)@(.+)$/
    var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
    var validChars="\[^\\s" + specialChars + "\]"
    var quotedUser="(\"[^\"]*\")"
    var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
    var atom=validChars + '+'
    var word="(" + atom + "|" + quotedUser + ")"
    var userPat=new RegExp("^" + word + "(\\." + word + ")*$")
    var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$")
    var matchArray=emailStr.match(emailPat)
    if (matchArray==null) {
          return false;
    }
    var user=matchArray[1]
    var domain=matchArray[2]
    if (user.match(userPat)==null) {
      return false;
    }
    var IPArray=domain.match(ipDomainPat)
    if (IPArray!=null) {
        for (var i=1;i<=4;i++) {
            if (IPArray[i]>255) {
              return false;
            }
		}
      return true;
    }
    var domainArray=domain.match(domainPat);
    if (domainArray==null) {
      return false;
    }
    var atomPat=new RegExp(atom,"g");
    var domArr=domain.match(atomPat);
    var len=domArr.length;
    if (domArr[domArr.length-1].length<2 || domArr[domArr.length-1].length>3) {
      return false;
    }
    if (len<2) {
      return false;
    }
    return true;
}

function transferFrom(source, dest){
    var f, s, d, i, xx;
    f = document.forms["ActivityLogConfig"];
    s = findControl(f, source);
    d = findControl(f, dest);	
	for (i = s.options.length-1; i >= 0; i--) {
	    if (s.options[i].selected) {
	        xx = new Option();
	        xx.value = s.options[i].value;
	        xx.text = s.options[i].text;
	        d.options[d.options.length] = xx;
	        s.options[i] = null;
	    }
	}	
    sortList(d);
	sortList(s);	
}

function findControl(f, s){
    var i;
    for (i = 0; i < f.length; i++) {
        if (f[i].name == s) {
            return f[i];
        }
    }
    return null;
}

function sortList(d){
    var i, j;
    for (i = 0; i < d.options.length - 1; i++) {
        for (j = i+1; j < d.options.length; j++) {
            if (d.options[i].text > d.options[j].text) {
                t1 = d.options[i].text;
                t2 = d.options[i].value;
                d.options[i].text = d.options[j].text;
                d.options[i].value = d.options[j].value;
                d.options[j].text = t1;
                d.options[j].value = t2;
            }
        }
    }
}

// Brian 090908
function popitup(url) {
    newwindow=window.open(url, 'name', 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=455,height=330');
    if (window.focus) {
        newwindow.focus()
    }
	newwindow.moveTo(screen.availWidth/2-(500/2),screen.availHeight/2-(300/2));
}
