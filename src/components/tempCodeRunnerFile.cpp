#include<bits/stdc++.h>
using namespace std;


int solve(int n, int m)
{
    if(n>2)
    {
        long long int a[4];
        a[3]=8;
        a[2]=12*(n-2);
        a[1]=6*pow((n-2), 2);
        a[0]=pow(n-2, 3);
        return a[m];
    }
    else
    {
        if(n==1)
        {
            if(m==6)
            {
                return 1; 
            }
            else
            {
                return 0;
            }
        }
        else
        {
            if(m==2)
            {
                return 4;
            }
            else
            {
                return 0;
            }
            return 0;
        }
    }
}

int main()
{
    int n, m;
    cin>>n;
    cin>>m;
    cout<<solve(n, m);
}