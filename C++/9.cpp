#include<iostream>
#include<string>
using namespace std;
int main(){
    string fruit="orange";
    string * basket=&fruit;

    cout<<*basket;

    string **shop = &basket;
    cout<<**shop;

    **shop="Pineapple";
    cout<<**shop;
    cout<<*basket;
    cout<<fruit;


    return 0;
}