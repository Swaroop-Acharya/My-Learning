//String operation

// Length of the string 
#include<string>
#include<iostream>
using namespace std;
int main(){
    // length() and size() both are same
    string txt ="Hello world";
    cout<<txt<<endl;
    cout<<txt.length()<<endl;
    cout<<txt.size()<<endl;

    // String Access
    cout<<txt[0]<<endl;
    for(int i=0;i<txt.length();i++){
    
        cout<<txt[i]<<endl;
    }

    // Change String Characters
    txt[0]='J';
    cout<<txt;
    return 0;
}