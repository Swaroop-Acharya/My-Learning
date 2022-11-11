#include <string>
#include <iostream>
using namespace std;
void pattern(int n){
   
    for(int row=1;row<=n*2-1;row++){
        int totalcolpr=row>n ? 2*n-row : row;
        
        for(int col=1;col<=totalcolpr;col++){
            cout<<"*";
        }
        cout<<endl;
    }
}

int main()
{
    pattern(5);

    return 0;
}