# TypeScript 算法项目使用指南

本文档详细介绍如何在这个项目中使用 TypeScript 编写、测试和运行算法代码。

## 目录

- [环境配置完整流程](#环境配置完整流程)
- [运行时选择：Node.js vs Bun](#运行时选择nodejs-vs-bun)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [常用命令](#常用命令)
- [示例：使用 ListNode 类](#示例使用-listnode-类)
- [编写新算法](#编写新算法)
- [最佳实践](#最佳实践)

---

## 环境配置完整流程

### 第一步：安装依赖

项目已配置好所需的 TypeScript 依赖，包括：

```bash
npm install --save-dev typescript tsx @types/node
```

安装的包说明：
- `typescript`: TypeScript 编译器，用于将 TS 代码编译成 JS
- `tsx`: 现代化的 TypeScript 运行器，比 ts-node 更快
- `@types/node`: Node.js 的类型定义文件

### 第二步：TypeScript 配置

项目根目录已包含 `tsconfig.json` 配置文件，主要配置说明：

```json
{
  "compilerOptions": {
    "target": "ES2022",           // 编译目标：现代 JavaScript
    "module": "ES2022",           // 模块系统：ES Module
    "outDir": "./dist",           // 编译输出目录
    "rootDir": "./src",           // 源代码目录
    "strict": true,               // 启用严格模式
    "sourceMap": true             // 生成源码映射，便于调试
  }
}
```

### 第三步：Package.json 脚本配置

已配置以下 npm 脚本：

```json
{
  "scripts": {
    "dev": "tsx",      // 直接运行 TS 文件（开发模式）
    "build": "tsc",    // 编译 TS 到 JS
    "start": "node"    // 运行编译后的 JS 文件
  }
}
```

---

## 运行时选择：Node.js vs Bun

本项目支持两种 TypeScript 运行时：

### 方式一：Node.js + tsx（经典方案）

已配置的依赖：
- `typescript`: TypeScript 编译器
- `tsx`: TypeScript 运行器
- `@types/node`: Node.js 类型定义

**优点**：
- 成熟稳定，生态丰富
- 与现有 Node.js 项目无缝集成
- 广泛使用的解决方案

### 方式二：Bun（高性能方案）

Bun 是一个快速的 JavaScript 运行时，内置原生 TypeScript 支持。

**优点**：
- ⚡ 速度极快：比 Node.js 快 3-4 倍
- 🔧 原生支持 TypeScript：无需额外工具即可运行
- 📦 内置包管理器：兼容 npm/yarn
- 🧪 内置测试框架
- 🔄 实时热重载

**安装 Bun（如果尚未安装）**：
```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash

# 或使用 npm
npm install -g bun
```

**验证安装**：
```bash
bun --version
```

**推荐使用场景**：
- 开发阶段需要快速迭代
- 频繁运行和测试算法
- 追求极致性能

---

## 项目结构

```
js_algos/
├── src/                    # TypeScript 源代码目录
│   ├── Node.ts            # 链表节点类定义
│   └── testNode.ts        # 测试示例
├── dist/                  # 编译输出目录（自动生成）
├── node_modules/          # 依赖包
├── package.json           # 项目配置
├── tsconfig.json          # TypeScript 配置
└── USAGE_GUIDE.md        # 本文档
```

---

## 快速开始

### 方式一：使用 Bun 运行 TypeScript（推荐 ⚡）

直接运行 TS 文件，无需编译或额外工具：

```bash
bun run src/testNode.ts
```

### 方式二：使用 Node.js + tsx

```bash
npm run dev src/testNode.ts
```

### 编译并运行（生产模式）

如果需要编译成 JavaScript：

```bash
# 1. 编译 TypeScript 到 JavaScript
npm run build

# 2. 运行编译后的文件（使用 Node.js）
npm run start dist/testNode.js

# 2. 运行编译后的文件（使用 Bun）
npm run start:bun dist/testNode.js
```

---

## 常用命令

### 方式一：使用 Node.js + tsx

```bash
# 运行单个 TS 文件（开发模式）
npm run dev src/yourFile.ts

# 或直接使用 tsx
npx tsx src/yourFile.ts
```

### 方式二：使用 Bun（推荐 ⚡）

```bash
# 直接运行 TypeScript 文件（无需编译）
bun run src/yourFile.ts

# 或使用 bun 命令
bun src/yourFile.ts

# 使用 npm 脚本
npm run dev:bun src/yourFile.ts
```

### 生产模式

```bash
# 编译整个项目（TypeScript -> JavaScript）
npm run build

# 运行编译后的 JS（使用 Node.js）
npm run start dist/yourFile.js

# 运行编译后的 JS（使用 Bun）
npm run start:bun dist/yourFile.js
```

### 类型检查

```bash
# 使用 TypeScript 编译器检查类型
npx tsc --noEmit

# 或使用 Bun 进行类型检查（更快）
bun typecheck src/yourFile.ts
```

---

## 示例：使用 ListNode 类

### Node.ts - 链表节点定义

```typescript
export class ListNode {
  public val: number;
  public next: ListNode | null = null;

  constructor(value: number) {
    this.val = value;
    this.next = null;
  }
}
```

### testNode.ts - 完整测试示例

```typescript
import { ListNode } from './Node.js';

// 创建链表节点
console.log('=== 测试 ListNode 类 ===\n');

// 创建单个节点
const node1 = new ListNode(1);
console.log('节点1:', { val: node1.val, next: node1.next });

// 创建链表: 1 -> 2 -> 3 -> null
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

console.log('\n创建链表: 1 -> 2 -> 3 -> null');

// 遍历链表
function printList(head: ListNode | null): void {
  const values: number[] = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  console.log('链表值:', values.join(' -> '));
}

printList(node1);

// 测试链表长度
function getListLength(head: ListNode | null): number {
  let count = 0;
  let current = head;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
}

console.log('链表长度:', getListLength(node1));

// 查找节点
function findNode(head: ListNode | null, value: number): ListNode | null {
  let current = head;
  while (current !== null) {
    if (current.val === value) return current;
    current = current.next;
  }
  return null;
}

const foundNode = findNode(node1, 2);
console.log('\n查找值为 2 的节点:', foundNode ? `找到了，值为 ${foundNode.val}` : '未找到');

console.log('\n✅ 测试完成！');
```

### 运行测试

```bash
npm run dev src/testNode.ts
```

**输出结果：**
```
=== 测试 ListNode 类 ===

节点1: { val: 1, next: null }

创建链表: 1 -> 2 -> 3 -> null
链表值: 1 -> 2 -> 3
链表长度: 3

查找值为 2 的节点: 找到了，值为 2

✅ 测试完成！
```

---

## 编写新算法

### 1. 创建新的算法文件

在 `src/` 目录下创建新的 `.ts` 文件，例如 `reverseList.ts`：

```typescript
import { ListNode } from './Node.js';

/**
 * 反转链表
 * @param head 链表头节点
 * @returns 反转后的链表头节点
 */
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

// 测试代码
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

console.log('原链表: 1 -> 2 -> 3');
const reversed = reverseList(node1);

// 打印反转后的链表
let current = reversed;
const values: number[] = [];
while (current !== null) {
  values.push(current.val);
  current = current.next;
}
console.log('反转后:', values.join(' -> '));
```

### 2. 运行新算法

```bash
npm run dev src/reverseList.ts
```

### 3. 编译并运行（可选）

```bash
# 编译
npm run build

# 运行
npm run start dist/reverseList.js
```

---

## 最佳实践

### 1. 类型安全

充分利用 TypeScript 的类型系统：

```typescript
// ✅ 好的做法：明确类型
function sumArray(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0);
}

// ❌ 避免使用 any
function process(data: any) { // 不推荐
  return data;
}
```

### 2. 模块导入

使用 ES Module 时，导入 TypeScript 文件需要加 `.js` 扩展名：

```typescript
// ✅ 正确
import { ListNode } from './Node.js';

// ❌ 错误
import { ListNode } from './Node';
import { ListNode } from './Node.ts';
```

### 3. 文件组织

```
src/
├── data-structures/      # 数据结构定义
│   ├── Node.ts
│   ├── Tree.ts
│   └── Graph.ts
├── algorithms/           # 算法实现
│   ├── sorting.ts
│   ├── searching.ts
│   └── linkedList.ts
└── tests/               # 测试文件
    ├── testNode.ts
    └── testTree.ts
```

### 4. 代码注释

使用 JSDoc 风格注释，IDE 会提供更好的智能提示：

```typescript
/**
 * 计算两个数的和
 * @param a 第一个数
 * @param b 第二个数
 * @returns 两数之和
 */
function add(a: number, b: number): number {
  return a + b;
}
```

### 5. 调试技巧

使用 `console.log` 进行调试：

```typescript
function debugList(head: ListNode | null): void {
  console.log('--- 调试链表 ---');
  let current = head;
  let index = 0;
  while (current !== null) {
    console.log(`节点 ${index}: val=${current.val}, next=${current.next ? '有' : '无'}`);
    current = current.next;
    index++;
  }
}
```

---

## 总结

现在你已经完成了 TypeScript 环境配置，可以：

### 使用 Node.js + tsx（经典方案）
1. ✅ 使用 `npm run dev src/yourFile.ts` 直接运行 TS 文件
2. ✅ 使用 `npm run build` 编译整个项目
3. ✅ 利用 TypeScript 的类型检查避免错误
4. ✅ 在 `src/` 目录下编写你的算法代码

### 使用 Bun（高性能方案）
1. ✅ 使用 `bun run src/yourFile.ts` 直接运行 TS 文件（无需编译）
2. ✅ 使用 `bun src/yourFile.ts` 快速测试算法
3. ✅ 利用 TypeScript 的类型检查避免错误
4. ✅ 在 `src/` 目录下编写你的算法代码

**推荐工作流（使用 Bun）：**
```bash
# 1. 创建新文件
# 2. 编写代码（利用 VS Code 的智能提示）
# 3. 快速运行测试
bun run src/yourFile.ts

# 4. 如果需要编译成 JS（用于生产）
npm run build
```

**推荐工作流（使用 Node.js + tsx）：**
```bash
# 1. 创建新文件
# 2. 编写代码（利用 VS Code 的智能提示）
# 3. 运行测试
npm run dev src/yourFile.ts

# 4. 如果需要，编译成 JS
npm run build
```

无论选择哪种方式，你都可以享受 TypeScript 带来的类型安全和开发体验！

祝你编写算法愉快！
