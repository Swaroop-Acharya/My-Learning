//Returing structure from a fuction
#include <string>
#include <iostream>
using namespace std;
struct student getInformation();
struct student{
    string name;
    int age;
    float cgpa;
};
int main()
{
    student s;
    s=getInformation();
     cout<<"The data is :"<<endl;
    cout<<s.name<<endl;
    cout<<s.age<<endl;
    cout<<s.cgpa<<endl;
    return 0;
}
struct student getInformation(){
    student s1;
    cout<<"Enter name:"<<endl;
    cin>>s1.name;
    cout<<"Age:"<<endl;
    cin>>s1.age;
    cout<<"CGPA"<<endl;
    cin>>s1.cgpa;
    return s1;
}