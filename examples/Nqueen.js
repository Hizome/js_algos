function Nqueen(n) {
	let res = [];
	let isQ = new Array(n).fill(0); // if the col has Q, array is sure
	let setPos = new Set(); // pos diag, (x,y) = y-x
	let setCon = new Set(); // neg diag, (x,y) = x+y


	const backTrace = (row, path) => {
		if (path.length === n) {
			res.push(path);

			return;
		}
		for (let col = 0; col < n; cpl++) {
			if (
				isQ[col] === 0 &&
				!setPos.has(row - col) &&
				!setCon.has(row + col)
			) {
				path.push(col); // push col 
				isQ[col] = 1;
				setPos.add(row-col);
				setPos.add(row+col);


				backTrace(row+1, path);

				path.pop();
				isQ[col] = 0;
				setPos.delete(row-col);
				setCon.delete(row+col);
				// 最后要清理足迹，因为能执行到这里，说明已经找不到
				// 如果找到的话，在迭代过程中就会返回了
			}

		}
	};
	backTrace(0, []);
	return res.length; //返回的是摆法的数量
}
