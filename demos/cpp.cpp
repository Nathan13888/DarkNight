#include <bits/stdc++.h>

using namespace std;
typedef unsigned long long ull;

ull bar(ull foo)
{
    return 10*foo;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    ull foo=5000;
    foo = bar(foo);
    cin >> foo;
    
    return 0;
}
