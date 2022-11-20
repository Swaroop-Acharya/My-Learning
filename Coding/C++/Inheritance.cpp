#include <string>
#include <iostream>
using namespace std;
class VehicleBrand
{
    public:
        string name="Ford";
        void sound(){
            cout<<"RATTTTTT RATTTTTTTTT"<<endl;
        }

};

//By default Base class is private so we have to mention public keyword

class Car: public VehicleBrand{
    public:
        string version="Mustang";
};

int main()
{
    Car obj;
    cout<<"Company name:"<<obj.name<<endl;
    cout<<"Version of the car:"<<obj.version<<endl;
    cout<<"Sound of the car:";
    obj.sound();
    return 0;
}