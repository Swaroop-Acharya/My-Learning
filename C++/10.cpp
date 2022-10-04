#include<iostream>
#include<string>
using namespace std;
void fuction(string);
void name(string n);

void fuction(string name){
    cout<<"Iam "<<name;
}
void name(string n="Engineering"){
    cout<<"class or course "<<n;
}

int main(){

    fuction("swaroop");
    name("6b");
    name();
    return 0;
}
