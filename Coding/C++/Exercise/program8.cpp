#include <string>
#include <iostream>
using namespace std;
void finder(string s,string w){
    string checker;
    int sl=s.length();
    int wl=w.length();
    int j=0,count=0,c;
    for(int i=0;i<sl;i++){
            if(w[0]==s[i]){
                int c=i;
               for(int j=0;j<wl;j++){
                checker=s[c++];
               }
            }    
       
    }
    cout<<checker;
}

int main()
{
    finder("Iam Swaroop and i like Swaroop and Swarop","Swaroop");

    return 0;
}