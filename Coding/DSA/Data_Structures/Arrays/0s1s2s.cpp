#include <string>
#include <iostream>
using namespace std;
void sortArray(int a[],int n){
        // int c1=0,c2=0,c3=0;
        // for(int i=0;i<n;i++){
        //     switch (arr[i])
        //     {
        //     case 0:c1++;
        //         break;
        //      case 1:c2++;
        //         break;
        //      case 2:c3++;
        //         break;
            
        //     }
        // }
        // int i=0;

        // while(c1>0){
        //     arr[i++]=0;
        //     c1--;
        // }
        //  while(c2>0){
        //     arr[i++]=1;
        //     c2--;
        // }
        //  while(c3>0){
        //     arr[i++]=2;
        //     c3--;
        // }

        int lo=0,hi=n-1,mid=0;
        while (mid <= hi) {
        switch (a[mid]) {
 
        // If the element is 0
        case 0:
            swap(a[lo++], a[mid++]);
            break;
 
        // If the element is 1 .
        case 1:
            mid++;
            break;
 
        // If the element is 2
        case 2:
            swap(a[mid], a[hi--]);
            break;
        }
    }

         for (int i = 0; i < n; i++)
            cout << a[i] << " ";

   }
int main()
{
    int arr[]={2,0,1,0,1};
    int n=sizeof(arr)/sizeof(int);
    sortArray(arr,n);

    return 0;
}