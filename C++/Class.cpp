#include<string>
#include<iostream>
using namespace std;
class Myclass{
    public:
        int rollno;
        string name;
        void myqoute(string);

};
void Myclass:: myqoute(string s){
    cout<<"Beautifull "<<s<<endl;
}
int main(){
    // Creating the object 
    Myclass c1;
    c1.rollno=1;
    c1.name="Swaroop";
    cout<<c1.rollno<<endl;
    cout<<c1.name<<endl;
    c1.myqoute("Morning");
    return 0;
}