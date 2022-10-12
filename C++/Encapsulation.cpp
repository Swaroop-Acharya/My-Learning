#include<string>
#include<iostream>
using namespace std;
class Company{
    private:
        double salary;
    public:
        string name;
        string desig;
        string gen;
        Company(string x,string y,string z);

        //Set method
        void setSalary(double s){
            salary=s;
        }

        //Get method
        // double getSalary(){
        //     return salary;
        // }

        void display(){
            cout<<"Employee details:"<<endl;
            cout<<name<<endl;
            cout<<desig<<endl;
            cout<<gen<<endl;
            cout<<salary<<endl;
        }

};
Company::Company(string x,string y,string z){
    name=x;
    desig=y;
    gen=z;
}

int main(){
    Company obj=Company("Swaroop","Software Developer","Male");
    obj.setSalary(45000);
    obj.display();
    // cout<<obj.getSalary();


}