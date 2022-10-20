#include <string>
#include <iostream>
using namespace std;

int main()
{
    int a[10],b[10],n=3;
    cout<<"Enter the elements to the array:";
    for(int i=0;i<n;i++){
       cin>>a[i];
    }
    int j=0;
    for(int i=3;i<0;i--){
        a[i]=b[j++];
    }
    for(int i=0;i<n;i++){
       cout<<b[i];
    }
    return 0;
}