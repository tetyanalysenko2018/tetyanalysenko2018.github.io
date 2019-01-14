function check()
{
 var s=0;
 if(document.test.quest1.value=="Землетрусів")s=s + 2;
 if(document.test.quest2[2].checked)s=s + 2;
// if(document.test.quest3[2].checked)s=s + 2;
 if(document.test.quest4.value=="Японія")s=s + 1;
 if(document.test.quest5[0].checked)s=s + 1;
 if(document.test.quest5[1].checked && document.test.quest5[3].checked)s=s + 2;
 if(document.test.quest6.value=="так")s=s + 2;
 alert("Ваша оцінка "+s+"(з 12)");
}
