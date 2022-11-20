#include <iostream>
#include <string>
using namespace std;
int main()
{
    long arr[100];
    cout << "Enter the number:\n";
    cin >> arr[0];
    long factorial = arr[1];
    for (int i = 1; i <= factorial; ++i)
    {
        factorial *= i;
    }
    cout << factorial;

    return 0;
}