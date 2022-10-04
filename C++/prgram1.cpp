#include<iostream>
#include<string>
using namespace std;

void swap(int *x,int *y){

    int temp;
    temp= *x;
    *x= *y;
    *y= temp;

}

int main(){
    int a=10,b=20;
    cout<<"Before swapp "<<"\n"<<"a="<<a<<"\n"<<"b="<<b<<"\n";
    cout<<"After swap"<<"\n";
    swap(&a,&b);
    cout<<"a="<<a<<"\n"<<"b="<<b<<"\n";
}