#include<stdio.h>
#include<string.h>
int main(){
    int len,rev;
    char str[]={"aba"};
    len=strlen(str)-1;
    rev=0;
    while(len>rev){
        if(str[rev++]!=str[len--]){
            printf("No p");
            return 0;
        }
    }
    printf("Palindrome");
    return 0;
}