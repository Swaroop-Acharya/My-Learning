//Explicit call


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
           
        }


        //Parameterized Constructor
        Sample(int x,string y,int age);


        Sample(Sample &t){
            rollno=t.rollno;
            name=t.name;
            age=t.age;
        }

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

    //Parameterized constructor
    //Explicit call
    Sample obj1=Sample(2,"Shrikanth",20);
    obj1.display();


}