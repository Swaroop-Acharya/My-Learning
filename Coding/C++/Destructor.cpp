#include<string>
#include<iostream>
using namespace std;
class Sample{
    public:
    Sample(){
        cout<<"Object created"<<endl;
    }
    // Destructor
    ~Sample(){
        cout<<"Object Destroyed"<<endl;
    }
};
main(){
    Sample s1,s2,s3;
}