

// trois variables comme compteurs
// table a triple entree 

for(int i = 0;<=10; i++)
{ 
	if( i % 2 == 2)
{
	console.log.ForegroundColor = ConsoleColor.Cyan;

}
else
 {
 	Console.ForegroundColor = ConsoleColor.Magenta;
 }

 Console.WriteLine("Table du {0}, i");

 for(int j = 0; j<=10; j++)
 {   
 
    if(j == 10)
    {
    	Console.WriteLine(" {0,3} |", i * j);
    }
    else
    {
    	Console.ForegroundColor = ConsoleColor.Orange;
    }
    {
    	Console.Write(" {0,3 |", i * j);
    }

     for(int v = 0; j<=10; v++)
 {   
 
    if(v == 10)
    {
    	Console.WriteLine(" {0,3} |", i * v);
    }
    else
    {
    	Console.Write(" {0,3 |", i * v);
    }

