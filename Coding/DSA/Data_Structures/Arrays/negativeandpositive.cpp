// Move all negative elements to end

//Dutch national Flag Algorithm
#include <string>
#include <iostream>
using namespace std;

// void sortArray(int arr[], int n)
// {
//     int low = 0, high = n - 1;
//     if (n == 1)
//     {
//         return;
//     }

//     while (low <= high)
//     {
//         if (arr[low] < 0 && arr[high] > 0)
//         {
//             low++;
//             high--;
//         }
//         else if (arr[low] > 0 && arr[high] > 0)
//         {
//             high--;
//         }
//         else if (arr[low] > 0 && arr[high] < 0)
//         {
//             swap(arr[low], arr[high]);
//         }
//         else if (arr[low] < 0 && arr[high] < 0)
//         {


//             low++;
//         }
//     }
// }
// int main()
// {
//     int a[] = {-12, 11, -13, -5, 6, -7, 5, -3, -6};
//     int n = sizeof(a) / sizeof(int);
//     sortArray(a, n);
//     for (int i = 0; i < n; i++)
//     {
//         cout << a[i] << " ";
//     }

//     return 0;
// }


//Quick sort partition algorithm
class Sample{
    public:
        void sortArray(int arr[],int n){
            int pivot=0;
            for(int j=0;j<n;j++){
                if(arr[j]<0){
                    if(j!=pivot){
                        swap(arr[j],arr[pivot]);
                    }
                    pivot++;
                }
            }
        }
        void printArr(int arr[] ,int n){
            for(int i=0;i<n;i++){
                cout<<arr[i]<<" ";
            }
        }
};
int main(){
    Sample a;
    int arr[]={1, 2,  -4, -5, 2, -7, 3, 2, -6, -8, -9, 3, 2,  1};
    int n=sizeof(arr)/sizeof(int);
    a.sortArray(arr,n);
    a.printArr(arr,n);
    return 0;
}