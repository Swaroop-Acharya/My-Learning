#include<iostream>
#include<string>
using namespace std;
// struct {
//     int rollno;
//     string name;
// }std1,std2;
// int main(){
//     std1.rollno=1;
//     std1.name="Swaroop";

//    std2.rollno=2;
//     std2.name="Ajay";

//     cout<<std1.name;
//     cout<<std1.rollno;


//     return 0;
// }
struct student{
    int rollno;
    string name;
};




int main(){

    student std1,std2;
    std1.rollno=1;
    std1.name="Swaroop";

   std2.rollno=2;
    std2.name="Ajay";

    cout<<std1.name;
    cout<<std1.rollno;


    return 0;
}