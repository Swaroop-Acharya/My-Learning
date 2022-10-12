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
    
}

int main()
{

    return 0;
}