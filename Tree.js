class Tree {
	constructor(root) {
		(Array.isArray(root) && root.length === 2 && root[0] > -1 && root[0] < 8 && root[1] > -1 && root[1] < 8) 
			? this.root = build(root)
			: this.root = null;
	}
}
