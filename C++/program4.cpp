#include <iostream>
#include <string>
using namespace std;
int main()
{
    int n = 0, m = 0;
    cin >>n ;
    cin>>m;
    int arr[n][m];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cin >> arr[i][j];
        }
    }
    int i = 0, j;
    int max = 0;
    int res[m];
    while (i < m)   //Check for the largest element in an array
    {
       for ( j = 0; j <= n; j++)
       {
           if (arr[i][j] > max)
           {
              max = arr[i][j];
           }
        }
        res[i] = max;
        max = 0;
        i++;
    }
    for(int i = 0; i <=n; i++)      //Print the largest element in an array
    {
       printf("Largest element in row %d is %d \n", i, res[i]);
    }

    return 0;
}