#include <stdio.h>

int main()
{
    int m,n;               
    scanf("%d %d",&m,&n);   
    int arr[100][100];       
    for(int i=0;i<m;i++)  
    {
        for(int j=0;j<n;j++)
        {
            scanf("%d",&arr[i][j]);
        }
    }
    int i = 0, j;
    int max = 0;
    int res[m];
    while (i < m)   
    {
       for ( j = 0; j < n; j++)
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
    for(int i = 0; i < n; i++)  
    {
       printf("%d ",res[i]);
    }
    
    return 0;
}