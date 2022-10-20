
#include <string>
#include <iostream>
using namespace std;
class Sample
{
    public:
        int num;
        Sample(int n);
};
Sample :: Sample(int n){
    int flag=0;
    if(n==1 || n==0){
        cout<<n<<" is not a prime number"<<endl;
    }else{
        for(int i=2;i<=n/2;i++){
            if(n % i==0){
                flag=1;
                break;
            }
        }
    }
    if (flag == 0)
    printf("%d is a prime number.", n);
  else
    printf("%d is not a prime number.", n);
}
int main()
{
    Sample s1(2);

    return 0;
}