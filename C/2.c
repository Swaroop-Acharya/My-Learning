#include<stdio.h>
int main()
{
    int n=0;
    printf("Enter the no:");
    scanf("%d",&n);
    if(n==0 || n==1 ){
        printf("NOT pr");
    }else if(n==2){
        printf("Prime no");
    }else{
        for(int i=2;i<=n/2;i++){
            if(n % i==0){
                printf("Not a prime no ");
                break;
            }else{
                printf("Prime no");
                break;
            }
        }
    }
}