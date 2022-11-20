#include <string>
#include <iostream>
using namespace std;
class MyGrandF
{
    public:
        string sirname="Acharya";
        void familyfood(){
            cout<<"Rava Laddu"<<endl;
        }

};

class GrandF: public MyGrandF{
    public:
    string sirname1="S";
};
class MyFather: public GrandF{
    public:
    string sirname2="A";
};

int main()
{
    MyFather obj;
    string son="Swaroop";
    cout<<"My name is "<<son<<endl;
    cout<<"My Full name will be:"<<obj.sirname2<<" "<<obj.sirname1<<" "<<obj.sirname<<" "<<son<<endl;
    cout<<"My favourite food is my family food that is"<<endl;
    obj.familyfood();
    return 0;
}