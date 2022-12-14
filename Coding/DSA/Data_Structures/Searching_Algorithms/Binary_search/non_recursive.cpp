#include<bits/stdc++.h>
using namespace std;
int main(){
    int n,ele,flag=0;
    cin>>n;
    int low=0,high=n-1,mid;
    int a[n];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    cout<<"Enter the element to be searched:"<<endl;
    cin>>ele;
    while (low<=high)
    {
        mid = low + (high-low)/2;
        if(a[mid]==ele){
            flag=1;
            break;
        }else if(a[mid]<ele){
            low=mid+1;
        }else if(a[mid]>ele){
            high=mid-1;
        }
    }
    
    if(flag==1){
        cout<<"Element is found at index "<<mid<<endl;
    }else{
         cout<<"Element not found "<<endl;
    }
    return 0;
}
