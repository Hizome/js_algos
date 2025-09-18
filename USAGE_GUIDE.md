# 如何使用 `js_algos` 项目编写、编译和运行新算法

本文档将指导您如何利用这个项目模板来编写和测试您的算法。

## 项目结构简介

- `src/`: 存放所有可复用的数据结构代码。
  - `index.js`: 统一导出所有模块，方便导入。
  - `LinkedList.js`, `Queue.js`, etc.: 各个数据结构的具体实现。
- `examples/`: **（推荐）** 存放您编写的各个独立的算法文件。每个 `.js` 文件都是一个可以单独运行的小程序。
- `package.json`: 项目配置文件，已配置为使用 ES 模块 (`"type": "module"`)。

---

## 如何添加和运行新算法

这是推荐的工作流程，它可以让您的每个算法解法都保持独立和整洁。

### 步骤 1: 创建新的算法文件

在 `/home/harry/harry/algo/js_algos/examples` 目录下创建一个新的 `.js` 文件。文件名最好能描述算法的名称，例如 `two_sum.js` 或 `reverse_string.js`。

```javascript
// examples/my_new_algorithm.js

// 从您的库中导入所需的数据结构
// import { LinkedList, Stack } from '../src/index.js';
import { LinkedList } from '../src/index.js';

function main() {
    console.log("--- Running My New Algorithm ---");

    // 在这里使用数据结构并实现您的算法
    const list = new LinkedList();
    list.push(10);
    list.push(20);

    console.log("My list:", list.toString());
    
    // ... 您的算法逻辑 ...
}

// 运行主函数
main();
```

### 步骤 2: 运行指定的算法文件

要运行 `examples` 目录下的特定文件，您需要使用 `node` 命令，并指定文件的完整路径。

**命令格式:**
```bash
# 从项目根目录运行
node examples/<文件名.js>
```

**具体示例:**
我们已经创建了 `examples/reverse_linked_list.js`。要运行它，请执行：
```bash
# 确保您在 /home/harry/harry/algo/js_algos 目录下
node examples/reverse_linked_list.js
```

---

## 总结

- 在 `examples/` 目录下为每个算法创建单独的文件。
- 使用 `import { ... } from '../src/index.js'` 来导入您的数据结构。
- 使用 `node examples/<文件名.js>` 来运行您的算法代码。

现在您可以开始编写您的算法了！
