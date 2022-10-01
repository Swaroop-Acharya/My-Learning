#include<iostream>
#include<string>
using namespace std;
int main(){
    string fruit ="Orange";
    string &basket=fruit;
    cout<<basket;
    cout<<fruit;
    cout<<&basket;


}