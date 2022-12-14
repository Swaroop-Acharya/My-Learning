#include<stdio.h>
int main(){
    int a[]={2,4,1};
    int n=7;
    int min=a[0];
    int index;
    int count=1;
    for(int i=0;i<n ;i++){
        if(a[i]<min){
            min=a[i];
            index=i;
        }

    }
    int j=0;
    while(index!=n-1){
        min=a[index+1];
        for(int i=index+1;i<n;i++){
           if(a[i]<min){
            min=a[i];
            index=i;
        } 
    }
     j++;
    }
    printf("%d",j+count);
   
}