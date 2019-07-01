
---

title: Flutter开发学习---官网入门体验实战

date: 2019-05-25 23:37:54 +0800

tags: []

---
建立在flutter开发环境搭建完成，并已创建一个Flutter APP项目<br />当前使用Android Studio编辑器开发

<a name="dzotz"></a>
# 感受热更新
修改项目文件，并保存（快捷键：`ctrl+s`），控制台输出成功更新APP<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/169149/1558799022008-4dcbacc8-1b62-42f4-befc-1c2e931c3acf.png#align=left&display=inline&height=125&name=image.png&originHeight=125&originWidth=479&size=8178&status=done&width=479)

<a name="X907e"></a>
# 创建一个无限滚动ListView

```dart
class RandomWordsState extends State<RandomWords> {
  ...
  Widget _buildSuggestions() {
    return new ListView.builder(
      padding: const EdgeInsets.all(16.0),
      // 对于每个建议的单词对都会调用一次itemBuilder，然后将单词对添加到ListTile行中
      // 在偶数行，该函数会为单词对添加一个ListTile row.
      // 在奇数行，该函数会添加一个分割线widget，来分隔相邻的词对。
      // 注意，在小屏幕上，分割线看起来可能比较吃力。
      itemBuilder: (context, i) {
        // 在每一列之前，添加一个1像素高的分隔线widget
        if (i.isOdd) return new Divider();

        // 语法 "i ~/ 2" 表示i除以2，但返回值是整形（向下取整），比如i为：1, 2, 3, 4, 5
        // 时，结果为0, 1, 1, 2, 2， 这可以计算出ListView中减去分隔线后的实际单词对数量
        final index = i ~/ 2;
        // 如果是建议列表中最后一个单词对
        if (index >= _suggestions.length) {
          // ...接着再生成10个单词对，然后添加到建议列表
          _suggestions.addAll(generateWordPairs().take(10));
        }
        return _buildRow(_suggestions[index]);
      }
    );
  }
}
```
更新APP后显示：<br />![](https://cdn.nlark.com/yuque/0/2019/png/169149/1558799177137-e108fe41-2ba6-4feb-8da9-38f6f1e23bc5.png#align=left&display=inline&height=688&originHeight=688&originWidth=350&size=0&status=done&width=350)<br />

<a name="9l22p"></a>
# 为列表添加交互
文档地址：[链接](https://api.flutter.dev/flutter/material/ListTile-class.html)
```dart
Widget _buildRow(WordPair pair) {
  final alreadySaved = _saved.contains(pair);
  return new ListTile(
    title: new Text(
      pair.asPascalCase,
      style: _biggerFont,
    ),
    trailing: new Icon(
      alreadySaved ? Icons.favorite : Icons.favorite_border,
      color: alreadySaved ? Colors.red : null,
    ),
    // 交互改变状态
    onTap: () {
      setState(() {
        if (alreadySaved) {
          _saved.remove(pair);
        } else {
          _saved.add(pair);
        }
      });
    },
  );
}
```


<a name="GcR1r"></a>
# 导航新界面
在appBar中添加一个actions
```dart
class RandomWordsState extends State<RandomWords> {
  ...
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Startup Name Generator'),
        /// 
        actions: <Widget>[
          new IconButton(icon: new Icon(Icons.list), onPressed: _pushSaved),
        ],
      ),
      body: _buildSuggestions(),
    );
  }
  ...
}
```
添加一个_pushSaved方法

```dart
// 接上一步
void _pushSaved() {
  Navigator.of(context).push(
    // 路由导航
    new MaterialPageRoute(
      builder: (context) {
        final tiles = _saved.map(
          (pair) {
            return new ListTile(
              title: new Text(
                pair.asPascalCase,
                style: _biggerFont,
              ),
            );
          },
        );
        // ListTile的divideTiles()方法在每个ListTile之间添加1像素的分割线
        final divided = ListTile.divideTiles(
          context: context,
          tiles: tiles,
        ).toList();
        // 返回界面布局
        return new Scaffold(
          appBar: new AppBar(
            title: new Text('Saved Suggestions'),
          ),
          body: new ListView(children: divided),
        );
      },
    ),
  );
}
```

<a name="BYnUB"></a>
# 更改UI
修改主题样式
```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Startup Name Generator',
      ///
      theme: new ThemeData(
        primaryColor: Colors.white,
      ),
      home: new RandomWords(),
    );
  }
}
```

<a name="B4Rxl"></a>
# 完整的Dart文件
```dart
import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Startup Name Generator',
      home: new RandomWords(),
    );
  }
}

// 状态部件，widget
class RandomWords extends StatefulWidget {
  @override
  createState() => new RandomWordsState();
}

// 状态继承类
class RandomWordsState extends State<RandomWords> {
  /// Dart语言中使用下划线前缀标识符，会强制其变成私有的
  final _suggestions = <WordPair>[]; // 保存建议的单词对
  final _saved = new Set<WordPair>(); // 交互，收藏Set集合
  final _biggerFont = const TextStyle(fontSize: 18.0); // 增大字体大小

  /// 构建显示建议单词对的ListView
  Widget _buildSuggestions() {
    return ListView.builder(
        padding: const EdgeInsets.all(16.0),
        itemBuilder: (context, i) {
          // 在每一列之前，添加一个1像素高的分隔线widget
          if (i.isOdd) return new Divider();
          // 语法 "i ~/ 2" 表示i除以2，但返回值是整形（向下取整），比如i为：1, 2, 3, 4, 5
          // 时，结果为0, 1, 1, 2, 2， 这可以计算出ListView中减去分隔线后的实际单词对数量
          final index = i ~/ 2;
          // 如果是建议列表中最后一个单词对
          if (index >= _suggestions.length) {
            // ...接着再生成10个单词对，然后添加到建议列表
            _suggestions.addAll(generateWordPairs().take(1));
          }
          return _buildRow(_suggestions[index]);
        });
  }

  /// 在ListTile中显示每个新词对，这使您在下一步中可以生成更漂亮的显示行
  Widget _buildRow(WordPair pair) {
    final alreadySaved = _saved.contains(pair); // 检查确保单词对还没有添加到收藏夹中
    return new ListTile(
        title: new Text(
          pair.asPascalCase,
          style: _biggerFont,
        ),
        // 列表项--尾部显示
        trailing: new Icon(
          alreadySaved ? Icons.favorite : Icons.favorite_border,
          color: alreadySaved ? Colors.red : null,
        ),
        // 列表项交互
        onTap: () {
          /// 在Flutter的响应式风格的框架中，调用setState() 会为State对象触发build()方法，从而导致对UI的更新
          setState(() {
            if (alreadySaved) {
              _saved.remove(pair);
            } else {
              _saved.add(pair);
            }
          });
        });
  }

  /// 界面导航保存
  void _pushSaved() {
    Navigator.of(context).push(
      new MaterialPageRoute(
        builder: (context) {
          final tiles = _saved.map(
            (pair) {
              return new ListTile(
                title: new Text(
                  pair.asPascalCase,
                  style: _biggerFont,
                ),
              );
            },
          );
          /// ListTile的divideTiles()方法在每个ListTile之间添加1像素的分割线
          final divided = ListTile.divideTiles(
            context: context,
            tiles: tiles,
          ).toList();

          // 界面对象
          return new Scaffold(
            appBar: new AppBar(
              title: new Text('点击二级界面'),
            ),
            body: new ListView(children: divided),
          );
        },
      ),
    );
  }

  /// build
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: Center(child: new Text('北斗项目')),
        actions: <Widget>[
          new IconButton(icon: new Icon(Icons.list), onPressed: _pushSaved),
        ],
      ),
      body: _buildSuggestions(),
    );
  }
}

```

<br />


