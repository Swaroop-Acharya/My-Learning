// Short hand if else
#include<iostream>
#include<string>
using namespace std;
int main()
{
    int time=10;
    if(time< 5){
        cout<<"Good morning"<<endl;
    }else{
         cout<<"Good Evening"<<endl;
    }
    // Using ternary operator

    string text=(time<5)? "Good morning" :"Good Evening";
    cout<<text<<endl;


    return 0;
}