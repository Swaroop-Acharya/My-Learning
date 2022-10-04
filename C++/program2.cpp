#include<iostream>
#include<string>
using namespace std;

int sum(int k){
    if(k>0)
        return k+sum(k-1);
    else
        return 0;
}

int main(){

    int result=sum(0);
    cout<<result;

    return 0;
}