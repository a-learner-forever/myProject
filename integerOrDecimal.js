function isInt(num)
{
    return(num%1 == 0);
}

n = prompt("enter the number to be checked");

if(isInt(n))
    console.log(n+" is integer number");
else
    console.log(n+" is decimal number");