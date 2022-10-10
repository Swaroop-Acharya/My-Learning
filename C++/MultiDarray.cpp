#include <iostream>
#include<string>
using namespace std;
int main()
{
    string arr[2][2][2] =
    {
     {
        {"A","B"},
        {"C","D"}
     },
     {
        {"E","F"},
        {"G","H"}
     }
    
    };
   int a=sizeof(arr)/sizeof(int);
  
    cout<<a;
    return 0;
}