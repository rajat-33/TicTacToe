#include<bits/stdc++.h>
using namespace std;

bool cf(const pair<string, int> &p1, const pair<string, int> &p2)
{
    if(p1.second==p2.second) //same marks
    {
        return p1.first<p2.first; //increasing name
    }
    else //unequal marks
    {
        return p1.first>p2.first; //increasing marks
    }
}

int main()
{
    int n;
    cin>>n;
    vector<pair<string, int>> arr(n); //name -> marks
    for(int i=0;i<n;i++)
    {
        cin>>arr[i].first;
        cin>>arr[i].second;
    }

    sort(arr.begin(), arr.end(), cf); //here cf is comparator function

    for(int i=0;i<n;i++)
    {
        cout<<arr[i].first<<" "<<arr[i].second<<"\n";
    }
}