#include<bits/stdc++.h>
using namespace std;

void binarySearch(int arr[],int low,int high,int element){
    int mid;
    if(low<=high){
        mid=low+(high-low)/2;
        if(arr[mid]==element){
            cout<<"Element found at index "<<mid<<endl;
        }else if(arr[mid]<element){
            binarySearch(arr,mid+1,high,element);
        }else if(arr[mid]>element){
            binarySearch(arr,low,high-1,element);
        }
    }else{
        cout<<"Element not found"<<endl;

    }

}



int main(){
    int index=0;
    int n,ele,flag=0;
    cin>>n;
    int a[n];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    cout<<"Enter the element to be searched:"<<endl;
    cin>>ele;
    binarySearch(a,0,n-1,ele);
    return 0;
}