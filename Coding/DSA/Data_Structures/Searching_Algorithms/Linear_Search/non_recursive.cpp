#include<bits/stdc++.h>
using namespace std;
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
    while(index<n){
        if(a[index]==ele){
            flag=1;
            break;
        }
        index++;
    }
    if(flag==1){
        cout<<"Element is found at index "<<index<<endl;
    }else{
         cout<<"Element not found "<<endl;
    }
    return 0;
}
//Time complexity :- O(n)