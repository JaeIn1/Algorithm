#include <iostream>
#include <queue>

using namespace std;

int N, num, from, to, road[10001], check[10001], record[10001];

void BFS(int from, int to) {
	queue<int> q;
	q.push(from);
	check[from] = true;

	while (!q.empty()) {
		int temp = q.front();
		q.pop();

		if (temp == to) {
			return;
		}

		for (int i = temp + road[temp]; i <= N; i += road[temp]) {
			if (!check[i]) {
				record[i] = record[temp] + 1;
				q.push(i);
				check[i] = true;
			}
		}
		for (int i = temp - road[temp]; i >=1; i -= road[temp]) {
			if (!check[i]) {
				record[i] = record[temp] + 1;
				q.push(i);
				check[i] = true;
			}
		}
	}
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(0);
	cin >> N;
	for (int i = 1; i <= N; i++) {
		cin >> road[i];
	}
	cin >> from >> to;
	if (from == to) {
		cout << "0";
		return 0;
	}
	BFS(from, to);

	if (record[to] == 0) {
		cout << -1;
	}
	else
		cout << record[to];
}