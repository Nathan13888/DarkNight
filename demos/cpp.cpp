#include <bits/stdc++.h>
using namespace std;

//Defines
#define F first
#define S second
#define PII pair<int, int>
#define PB push_back
#define MP make_pair
#define REP(i, a, b) for (int i = a; i <= b; i++)
#define SQ(a) (a) * (a)
#define NPOS string::npos

typedef unsigned long long ull;

ull bar(ull foo, string s, int i, float f, PII pair)
{
    return (10 * foo) * (s.length() / f);
}

// COMMENT
/*
 * BLOCK COMMENT
 */
int main()
{
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    vector<char> vect(69);

    int i = 0;
    char x;
    while (cin >> x)
    {
        vect.push_back(x);
    }

    ull foo = 5000;
    PII pii = MP(69, 69);
    foo = bar(foo, "s", 6, 69.699, pii);
    cin >> foo;

    return 0;
}
