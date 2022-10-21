#include <string>
#include <iostream>
using namespace std;
struct Pair{
    int min;
    int max;
};
struct Pair compare(int a[],int n){
     Pair minmax;
    if(n==1){
        minmax.max=a[0];
        minmax.min=a[0];
        return minmax;
    }
    if(a[0]>a[1]){
        minmax.max=a[0];
        minmax.min=a[1];
    }else{
        minmax.min=a[1];
        minmax.max=a[0];
    }

    for(int i=2;i<n;i++){
        if(a[i]<minmax.min){
            minmax.min=a[i];
        }else if(a[i]>minmax.max){
            minmax.max=a[i];
        }
    }


    return minmax;
}
int main()
{
    struct Pair p;
    int a[]={ 1000, 11, 445,
                  1, 330, 3000};
    int n=sizeof(a)/sizeof(int);
    
    p=compare(a,n);

    cout<<"Maximum element :"<<p.max<<endl;
    cout<<"Minimum element :"<<p.min<<endl;

    return 0;
}