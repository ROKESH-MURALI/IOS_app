import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('WebView App')),
        body: const WebView(
          initialUrl: 'https://app.healthsensei.co.in/login',
          javascriptMode: JavascriptMode.unrestricted,
        ),
      ),
    );
  }
}
