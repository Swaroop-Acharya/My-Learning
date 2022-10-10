#include<string>
#include<iostream>
using namespace std;
class Sample{
    public:
        int rollno;
        string name;
        int age;

        //Default constructor
        Sample(){
            cout<<"Student details are:\n";
        }


        //Parameterized Constructor
        Sample(int x,string y,int age);

        void display(){
            cout<<rollno<<endl;
            cout<<name<<endl;
            cout<<age<<endl;
        }

};
Sample :: Sample(int x,string y,int z)
{
    rollno=x;
    name=y;
    age=z;
}

int main(){
    //Implicit call
    Sample obj;
    obj.rollno=1;
    obj.name="Swaroop";
    obj.age=20;
    obj.display();

    //Parameterized constructor
    //Explicit call
    Sample obj1=Sample(2,"Shrikanth",20);
    obj1.display();


}