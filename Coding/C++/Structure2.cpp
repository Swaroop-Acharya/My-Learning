//Passing structure to an function
#include <string>
#include <iostream>
using namespace std;
void display(struct student);
struct student{
    string name;
    int age;
    float cgpa;
};

int main()
{
    struct student s1;
    cout<<"Enter name:"<<endl;
    cin>>s1.name;
    cout<<"Age:"<<endl;
    cin>>s1.age;
    cout<<"CGPA"<<endl;
    cin>>s1.cgpa;
    display(s1);
    return 0;
}
void display(struct student s){
    cout<<"The data is :"<<endl;
    cout<<s.name<<endl;
    cout<<s.age<<endl;
    cout<<s.cgpa<<endl;

}