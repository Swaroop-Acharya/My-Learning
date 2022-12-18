//Insert an element to appropriate position to an sorted array.Such that after inserting the array should be sorted;
#include<bits/stdc++.h>
using namespace std;
void insertionSort(int arr[],int n,int key){
    int i,j;
    i=n-1;
    while(key<arr[i] && i>=0){
        arr[i+1]=arr[i];
        i--;
    }
    arr[i+1]=key;

    cout<<"After sorting:"<<endl;
     for(int k=0;k<=n;k++){
        cout<<arr[k]<<" ";
    }
}
int main(){
    int n,temp,key;
    cin>>n;
    int a[n];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    cin>>key;
    a[n+1]=key;
    insertionSort(a,n,key);
    return 0;
}