//By swapping 
// #include <string>
// #include <iostream>
// using namespace std;
// void rev(int arr[],int n){
//     int start=0,end=n-1;
//     while(start<end){
//         int temp=arr[start];
//         arr[start]=arr[end];
//         arr[end]=temp;
//         start=start+1;
//         end=end-1;
//     }
//     for(int i=0;i<n;i++){
//         cout<<arr[i];
//     }
// }
// int main()
// {
//     int arr[]={1,2,3,4,5,6};
//     int n=sizeof(arr)/sizeof(int);
//     rev(arr,n);

//     return 0;
// }

//By Recursion

#include <string>
#include <iostream>
using namespace std;
void rev(int arr[],int n,int start, int end){

    if(start>=end)
        return;
    int temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    rev(arr,n,start+1,end-1);

}

void print(int arr[],int n){
     for(int i=0;i<n;i++){
        cout<<arr[i];
    }
}
int main()
{
    int arr[]={1,2,3,4,5};
    int n=sizeof(arr)/sizeof(int);
    rev(arr,n,0,n-1);
    print(arr,n);

    return 0;
}