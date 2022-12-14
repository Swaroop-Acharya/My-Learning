#include<bits/stdc++.h>
using namespace std;

void linearSearch(int arr[],int size,int start,int element){

    if(start<size){
        if(arr[start]==element){
            cout<<"Element found at the index"<<start<<endl;
        }else
            linearSearch(arr,size,start+1,element);
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
    linearSearch(a,n,0,ele);
    return 0;
}