//User Input Strings
//getline() -> takes two parameters cin and variable name


#include<iostream>
#include<string>
using namespace std;
int main(){
    string fullName;
    cout<<"Enter your name:"<<endl;
    cin>>fullName;
    cout<<"Fullname is:"<<fullName<<endl;
    // cin considers a space (whitespace, tabs, etc) as a terminating character, which means that it can only display a single word (even if you type many words):
    cout<<"Enter your name:"<<endl;
    getline(cin,fullName);
    cout<<"Fullname is:"<<fullName<<endl;
}