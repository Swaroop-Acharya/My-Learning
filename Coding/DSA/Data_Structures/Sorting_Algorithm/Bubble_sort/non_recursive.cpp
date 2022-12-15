#include<bits/stdc++.h>
using namespace std;
int main(){
    int n,temp;
    cin>>n;
    int a[n];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    for(int i=0;i<n;i++){
        for(int j=0;j<n-i;j++){
            if(a[j]>a[j+1]){
                temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
        }
    }
    cout<<"After sorting:"<<endl;
     for(int i=0;i<n;i++){
        cout<<a[i]<<" ";
    }
    return 0;
}
//Time complexity :- O(n^2)