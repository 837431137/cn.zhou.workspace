date=new Date()
day=date.getDate()  //日期
month=date.getMonth()+1 //月份

switch(month){
 case 9:
    week=Math.ceil(day/7) 
 break

 case 10:
    day+=30
    week=Math.ceil(day/7) 
 break

 case 11:
    day+=30+31
    week=Math.ceil(day/7) 
 break

 case 12:
    day+=30+31+30
    week=Math.ceil(day/7) 
 break

 case 1:
    day+=30+31+30+31
    week=Math.ceil(day/7) 
 break
 }

 day=date.getDay()
 switch(day){
    case 1:
    str="一"
    break;

    case 2:
    str="二"
    break;

    case 3:
    str="三"
    break;

    case 4:
    str="四"
    break;

    case 5:
    str="五"
    break;

    case 6:
    str="六"
    break;
    
    case 7:
    str="天"
    break;
 }

 document.write("星期",str)
 document.write( ":&nbsp;&nbsp;&nbsp;&nbsp; 现在是第")
 document.write( week+"周")
  