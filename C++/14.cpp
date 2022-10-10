// Explicit call

#include <string>
#include <iostream>
using namespace std;
class Sample
{
public:
    int rollno;
    string name;
    int age;

    // Default constructor
    Sample()
    {
    }

    // Parameterized Constructor
    void init(int x, string y, int z)
    {
        rollno = x;
        name = y;
        age = z;
    }

    Sample(Sample &t)
    {
        rollno = t.rollno;
        name = t.name;
        age = t.age;
    }

    void display()
    {
        cout << rollno << endl;
        cout << name << endl;
        cout << age << endl;
    }
};

int main()
{

    // Parameterized constructor
    // Explicit call
    Sample obj1;
    obj1.init(2, "Shrikanth", 20);
    obj1.display();

    Sample obj2(obj1);
    obj2.display();

    return 0;
}