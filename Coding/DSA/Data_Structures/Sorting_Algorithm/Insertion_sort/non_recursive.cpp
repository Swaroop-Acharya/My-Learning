#include<bits/stdc++.h>
using namespace std;

void insertionSort(int arr[],int n){
    int i,j,key;
    for(i=1;i<n;i++){
        key=arr[i];
        j=i-1;
        while(j>=0 && arr[j] >key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    cout<<"After sorting:"<<endl;
     for(int k=0;k<n;k++){
        cout<<arr[k]<<" ";
    }
}
int main(){
    int n,temp;
    cin>>n;
    int a[n];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    insertionSort(a,n);
    return 0;
}
//Time complexity :- O(n^2)