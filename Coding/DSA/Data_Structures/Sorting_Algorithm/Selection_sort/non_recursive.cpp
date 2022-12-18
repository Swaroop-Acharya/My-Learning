#include<bits/stdc++.h>
using namespace std;
void selectionSort(int arr[],int n){
    int i,j,minindex,temp;
    for(i=0;i<n;i++){
        minindex=i;
        for(j=i+0;j<n;j++){
            if(arr[j]<arr[minindex])
                minindex=j;
        }
        temp=arr[i];
        arr[i]=arr[minindex];
        arr[minindex]=temp;
    }

    cout<<"After sorting:"<<endl;
     for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}
int main(){
    int n,temp;
    cin>>n;
    int a[n];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    selectionSort(a,n);
    return 0;
}
//Time complexity :- O(n^2)